var fs = require('fs-extra'),
	path = require('path'),
	platforms = require('../platforms/index'),
	_ = require('lodash'),
	colors = require('colors'),
	child_process = require('child_process'),
	exec = child_process.exec,
	execSync = child_process.execSync,
	TESTS_WITH_DATES = ['ALOY-263', 'ALOY-1003', 'ALOY-1058'],
	TESTS_TO_SKIP = ['ALOY-840', 'ALOY-887', 'ALOY-932', 'ALOY-1080'];

var alloyRoot = path.join(__dirname, '..'),
	paths = {
		apps: path.join(alloyRoot, 'test', 'apps'),
		harness: path.join(alloyRoot, 'test', 'projects', 'Harness')
	},
	platformsArray = ['android', 'ios'],
	platformCtr = 0;

// make sure we get a test app
var testApp = process.argv[2];
if (!testApp) {
	console.error('You must specify a test app');
	console.error('  ex. node testgen.js advanced/device_query');
	process.exit(1);
} else if (TESTS_TO_SKIP.indexOf(testApp) !== -1) {
	console.log((testApp + ' has code known to fail matching generated code. Canceling creation of _generated code.').yellow);
	process.exit();
} else if (TESTS_WITH_DATES.indexOf(testApp) !== -1) {
	console.log((testApp + ' contains date functions, which create localized code unlikely to match on other systems.').yellow);
	console.log(('Canceling creation of _generated code.').yellow);
	process.exit();
} else {
	console.log('generating code for ' + testApp.yellow);
}

const pluginPath = path.join(paths.harness, 'plugins/ti.alloy/hooks/tscompile.js');
const alloyPath = path.join(__dirname, '../bin/alloy');

execSync(`npx jake app:clobber`);

// Stage the app
var cmd = `node ${alloyPath} new -f ${paths.harness} --testapp ${path.join('../../test/apps', testApp)}`;
exec(cmd, function(error, stdout, stderr) {
	if (error !== null) {
		console.error(error);
		console.error(stderr);
		process.exit(2);
	}

	console.log(stdout);
	doCompile(platformsArray[platformCtr++]);
});

function runTsCompileHook(callback) {
	require(pluginPath).compileTS({
		logger: console,
		dir: paths.harness
	}, callback);
}

function doCompile(platform) {
	if (!platform) { return; }

	const cmd = `node ${alloyPath} compile ${paths.harness} --config platform=${platform}`;
	exec(cmd, function(error, stdout, stderr) {
		if (error !== null) {
			console.error(error);
			console.error(stderr);
			process.exit(3);
		}

		if (fs.existsSync(pluginPath)) {
			runTsCompileHook((e) => {
				if (e) {
					console.error(e.message);
					console.error(e.stack);
					process.exit(4);
				}
				copyCompiledFiles(platform);
				doCompile(platformsArray[platformCtr++]);
			});
			return;
		}
		copyCompiledFiles(platform);
		doCompile(platformsArray[platformCtr++]);
	});
}

function copyCompiledFiles(platform) {
	var genDir = path.join(paths.apps, testApp, '_generated', platform);
	fs.removeSync(genDir);
	fs.mkdirpSync(genDir);
	var p = platform === 'ios' ? 'iphone' : platform;

	var locations = [
		{ src: path.join(p, 'alloy', 'controllers'), dst: path.join('alloy', 'controllers')},
		{ src: path.join(p, 'alloy', 'models'), dst: path.join('alloy', 'models')},
		{ src: path.join(p, 'alloy', 'widgets'), dst: path.join('alloy', 'widgets')},
		{ src: 'controllers', dst: path.join('alloy', 'controllers')},
		{ src: 'models', dst: path.join('alloy', 'models')},
		{ src: 'widgets', dst: path.join('alloy', 'widgets')},
		{ src: path.join(p, 'controllers'), dst: path.join('alloy', 'controllers')},
		{ src: path.join(p, 'models'), dst: path.join('alloy', 'models')},
		{ src: path.join(p, 'widgets'), dst: path.join('alloy', 'widgets')},
		{ src: 'model', dst: 'model'},
	];
	_.each(locations, function(l) {
		var src = path.join(paths.harness, 'Resources', l.src);
		var dst = path.join(genDir, l.dst);
		if (fs.existsSync(src) && fs.readdirSync(src).length !== 0) {
			fs.mkdirpSync(dst);

			fs.copySync(src, dst);

			// we don't need to evaluate BaseController.js every time
			var bc = path.join(dst, 'BaseController.js');
			if ((l.dst === path.join('alloy', 'controllers') || (l.dst === 'controllers'))
					&& fs.existsSync(bc)) {
				fs.unlinkSync(bc);
			}

			console.log('Generated runtime files in ' +
					path.join('_generated', platform, l.src).cyan
			);
		}
	});
	var appJs = path.join(paths.harness, 'Resources', p, 'app.js');
	if (!fs.existsSync(appJs)) {
		appJs = path.join(paths.harness, 'Resources', 'app.js');
	}
	fs.copySync(appJs, path.join(genDir, 'app.js'));
}
