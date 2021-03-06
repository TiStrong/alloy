const colors = require('colors');
const path = require('path');
const fs = require('fs-extra');
const execSync = require('child_process').execSync;
const platforms = ['ios', 'android'];
const genDir = '_generated';
const logDir = '_logs_typescript';
// const logDir = '_logs_feature';

const DIR = 'typescript';
// const DIR = 'testing';
const PATH = path.join(__dirname, '../test/apps', DIR);
const TESTS_WITH_DATES = ['ALOY-263', 'ALOY-1003', 'ALOY-1058'];
const TESTS_TO_SKIP = ['ALOY-840', 'ALOY-887', 'ALOY-932', 'ALOY-1080'];
const SKIP_ON_PLATFORM = {
	'ios': [
		'ALOY-727'
	],
	'android': [
		'ALOY-667',
		'ALOY-1127'
	]
};

function createEnvForPlatform(platform) {
	const ENV = {
		TEST_ENV_TEST: true,
		TEST_ENV_PROD: false,
		TEST_ENV_DEV: true,
		TEST_DIST_ADHOC: false,
		TEST_DIST_STORE: false,

		TEST_OS_MOBILEWEB: false,
		TEST_OS_ANDROID: false,
		TEST_OS_IOS: false,
		TEST_OS_WINDOWS: false
	};
	ENV['TEST_OS_' + platform.toUpperCase()] = true;
	return ENV;
}

function execLogger(dir, platform) {
	// Stage the app
	const cmd = `node ${path.join(__dirname, 'p')} ${platform} ${dir}`;
	const outDir = dir.replace(genDir, logDir);
	try {
		console.log(cmd.yellow);
		const stdout = execSync(cmd, {
			env: createEnvForPlatform(platform)
		});
		fs.mkdirpSync(outDir);
		if (stdout && stdout.length) {
			fs.writeFileSync(path.join(outDir, 'out.log'), stdout);
		}
	} catch (e) {
		console.error(`Error while processing: "${dir}"`);
		process.exit(1);
	}
	console.log(`Finished processing: "${dir}"`);
}

function allowedOnPlatform(file, platform) {
	if (SKIP_ON_PLATFORM[platform] && SKIP_ON_PLATFORM[platform].includes(file)) {
		console.log(`Skip processing "${file}" on platform "${platform}"`);
		return false;
	}
	return true;
}

function generateLogs() {
	fs.readdirSync(PATH).forEach(function(file) {
		if (TESTS_TO_SKIP.includes(file)) {
			console.log(`Skip processing "${file}"`);
			return;
		}
		if (TESTS_WITH_DATES.includes(file)) {
			console.log(`Skip processing "${file}"`);
			return;
		}
		platforms.forEach(function(platform) {
			const appDir = path.join(PATH, file);
			if (!allowedOnPlatform(file, platform)) {
				return;
			}
			const platformDir = path.join(appDir, genDir, platform);
			if (fs.existsSync(platformDir)) {
				execLogger(platformDir, platform);
			} else {
				console.log(`Not found generated files for "${file}" platform "${platform}"`);
			}
		});
	});
}

function generateCode() {
	const list = fs.readdirSync(PATH);
	list.forEach(function(file, idx) {
		if (TESTS_TO_SKIP.includes(file)) {
			console.log(`Skip processing "${file}"`);
			return;
		}
		const dir = path.join(DIR, file);
		let cmd = `node ${path.join(__dirname, 'create_generated_code')} ${dir}`;
		try {
			console.log(`execSync (${idx + 1}/${list.length}): `.green + `"${cmd}"`.yellow);
			const stdout = execSync(cmd);
			console.log(`Finished processing: "${dir}"`);
			console.log(stdout.toString());
		} catch (e) {
			console.error(`Error while processing: "${dir}"`.red);
		}
	});
}

// generateLogs();
generateCode();
