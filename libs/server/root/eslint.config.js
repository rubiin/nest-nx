const baseConfig = require("../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/root/**/*.ts",
			"libs/server/root/**/*.tsx",
			"libs/server/root/**/*.js",
			"libs/server/root/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/root/**/*.ts", "libs/server/root/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/root/**/*.js", "libs/server/root/**/*.jsx"],
		rules: {},
	},
];
