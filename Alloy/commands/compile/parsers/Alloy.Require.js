var path = require('path'),
	fs = require('fs'),
	_ = require('lodash'),
	CU = require('../compilerUtils'),
	U = require('../../../utils'),
	styler = require('../styler'),
	CONST = require('../../../common/constants'),
	moduleRoot = path.join(__dirname, '..', '..', '..', '..'),
	TYPES = ['view', 'widget'];

exports.parse = function(node, state) {
	return require('./base').parse(node, state, parse);
};

function parse(node, state, args) {
	var code = '',
		type = node.getAttribute('type') || CONST.REQUIRE_TYPE_DEFAULT,
		src = node.getAttribute('src'),
		name = node.getAttribute('name') || CONST.NAME_WIDGET_DEFAULT,
		method;

	// validate src
	if (!src) {
		U.die('<Require> elements must have a "src" attribute.');
	}

	// determine which Alloy method to use
	var extraArgs = '';
	var config = CU.getCompilerConfig();
	var appPath = config.dir.home;
	var viewPaths = [];
	var codePaths = [];
	var tsOutput = state.outputFormat === 'TS';

	var platform;
	if (config && config.alloyConfig && config.alloyConfig.platform) {
		platform = config.alloyConfig.platform;
	}

	switch (type) {
		case 'view':
			method = 'createController';
			if (platform) { viewPaths.push(path.join(appPath, CONST.DIR.VIEW, platform, src)); }
			viewPaths.push(path.join(appPath, CONST.DIR.VIEW, src));
			if (tsOutput) {
				codePaths.push(path.join(appPath, CONST.DIR.TS_CONTROLLER, src));
			}
			break;
		case 'widget':
			method = 'createWidget';
			extraArgs = "'" + name + "',";
			U.getWidgetDirectories(appPath).forEach(function(wDir) {
				if (wDir.manifest.id === src) {
					if (platform) {
						viewPaths.push(path.join(wDir.dir, CONST.DIR.VIEW, platform, name));
					}
					viewPaths.push(path.join(wDir.dir, CONST.DIR.VIEW, name));
					// TODO: support Widgets in TypeScript
				}
			});
			break;
		default:
			U.die('Invalid <Require> type "' + type + '"');
	}

	// check the extensions on the paths to check
	var regex = new RegExp('\\.' + CONST.FILE_EXT.VIEW + '$');
	var found = false;
	for (var i = 0; i < viewPaths.length; i++) {
		var fullpath = viewPaths[i];
		fullpath += regex.test(fullpath) ? '' :  '.' + CONST.FILE_EXT.VIEW;
		if (fs.existsSync(fullpath)) {
			found = true;
			break;
		}
	}

	// abort if there's no view to be found
	if (!found) {
		if (CU.isNodeForCurrentPlatform(node)) {
			U.die([
				type + ' "' + src + '" ' + (type === 'widget' ? 'view "' + name + '" ' : '') +
				'does not exist.',
				'The following paths were inspected:'
			].concat(viewPaths));
		}
	}

	var importCode;
	var requiredType = 'Alloy.Controller';

	// searching for TypeScript controller
	found = false;
	for (i = 0; i < codePaths.length; i++) {
		fullpath = codePaths[i].replace(regex, '') + '.' + CONST.FILE_EXT.TS_CONTROLLER;
		if (fs.existsSync(fullpath)) {
			found = true;
			break;
		}
	}

	if (found) {
		requiredType = `Controller_${src.replace(regex, '').replace(/\//g, '')}`;
		importCode = `import ${requiredType} from '/${path.join(CONST.DIR.TS_CONTROLLER, src)}';\n`;
	}

	// Remove <Require>-specific attributes from createArgs
	delete args.createArgs.type;
	delete args.createArgs.src;
	delete args.createArgs.name;

	// make symbol a local variable if necessary, used for binding
	if (state.local) {
		args.symbol = CU.generateUniqueId();
	}

	// process the children, if any
	var children = U.XML.getElementsFromNodes(node.childNodes),
		xChildren = [];
	_.each(children, function(child) {
		var forCurrentPlatform = CU.isNodeForCurrentPlatform(child);
		if (!forCurrentPlatform && !tsOutput) { return; }
		var childArgs = CU.getParserArgs(child);
		code += CU.generateNodeExtended(child, state, {
			parent: {},
			post: function(node, state, args) {
				if (state.parent.symbol && forCurrentPlatform) {
					xChildren.push(state.parent.symbol);
				}
			}
		});
	});

	// add extra createArgs if present
	var xArgs = {};

	if (xChildren.length) { xArgs.children = '__ALLOY_EXPR__--[' + xChildren.join(',') + ']'; }
	if (state.model) { xArgs[CONST.BIND_MODEL_VAR] = '__ALLOY_EXPR__--' + state.model; }
	if (state.parent && state.parent.symbol) {
		xArgs[CONST.PARENT_SYMBOL_VAR] = '__ALLOY_EXPR__--' + state.parent.symbol;
	} else if (CU.currentDefaultId !== 'index') {
		xArgs[CONST.PARENT_SYMBOL_VAR] = '__ALLOY_EXPR__--' + CU.getParentSymbol(state);
	}
	if (state.templateObject) {
		xArgs[CONST.ITEM_TEMPLATE_VAR] = '__ALLOY_EXPR__--' + state.templateObject;
	}
	args.createArgs = _.extend(args.createArgs || {}, xArgs);

	// Generate runtime code
	var params = extraArgs + styler.generateStyleParams(
		state.styles,
		args.classes,
		args.id,
		type === 'widget' ? 'Alloy.Widget' : 'Alloy.Require',
		args.createArgs,
		state
	);
	let parent = {
		symbol: args.symbol + '.getViewEx({recurse:true})'
	};
	var instance;
	if (found) {
		instance = 'new ' + requiredType + '(' + params + ')';
	} else {
		instance = 'Alloy.' + method + "('" + src + "'," + params + ')';
	}
	code += (state.local ? 'var ' : '') + args.symbol + ' = ' + instance + ';\n';
	if (args.parent.symbol && !state.templateObject && !state.androidMenu) {
		code += ';\n' + args.symbol + '.setParent(' + args.parent.symbol + ');\n';
	} else if (type === 'widget' && isOnlyNodeInView(node)) {
		code += '.getViewEx({recurse:true});\n';
		parent = { symbol: args.symbol };
	} else {
		code += ';\n';
	}

	var propertyDeclaration;
	if (!state.local) {
		propertyDeclaration = {
			name: args.id,
			type: requiredType
		};
	}

	return {
		importCode: importCode,
		propertyDeclaration: propertyDeclaration,
		parent: parent,
		controller: args.symbol,
		styles: state.styles,
		code: code
	};
}

/**
 * Determines whether a node is the only child node of the Alloy tag in the view structure. This is
 * used to determine whether a Widget should become the root element of the view when a view
 * only contains a single Widget tag like below
 *
 * <Alloy>
 *     <Widget src="com.ti.mywidget" id="widget" />
 * </Alloy>
 *
 * @param {Node} node - XMLDom node to be inspected
 * @return Boolean
 */
function isOnlyNodeInView (node) {

	// Shouldn't happen as the Alloy tag should always exist, but lets handle it
	if (!node.parentNode) {
		return false;
	}

	// If the parent isn't the Alloy tag, then it isn't the only node in the view
	if (node.parentNode.nodeName !== 'Alloy') {
		return false;
	}

	// If there are sibling nodes, then it isn't the only node in the view
	const siblingNodes = U.XML.getElementsFromNodes(node.parentNode.childNodes).filter(n => n !== node);
	if (siblingNodes.length !== 0) {
		return false;
	}

	return true;
}
