var styler = require('../styler'),
	CU = require('../compilerUtils'),
	_ = require('lodash');

exports.parse = function(node, state) {
	return require('./base').parse(node, state, parse);
};

function parse(node, state, args) {
	var extraStyle = [];
	_.each(['latitude', 'longitude'], function(attr) {
		var geo = node.getAttribute(attr);
		if (geo) {
			extraStyle.push([attr, parseFloat(geo)]);
			node.removeAttribute(attr);
		}
	});

	var code = require('./default').parse(node, _.extend(state, {
		parent: {},
		styles: state.styles,
		extraStyle: styler.createVariableStyle(extraStyle)
	})).code;

	var tiMapModule = 'TiMap';

	return {
		propertyDeclaration: {
			name: args.id,
			type: `${tiMapModule}.Annotation`
		},
		importCode: `import ${tiMapModule} from 'ti.map';\n`,
		parent: {
			node: node,
			symbol: args.symbol
		},
		styles: state.styles,
		code: code
	};
}
