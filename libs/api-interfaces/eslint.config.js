const baseConfig = require("../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/api-interfaces/**/*.ts",
			"libs/api-interfaces/**/*.tsx",
			"libs/api-interfaces/**/*.js",
			"libs/api-interfaces/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/api-interfaces/**/*.ts", "libs/api-interfaces/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/api-interfaces/**/*.js", "libs/api-interfaces/**/*.jsx"],
		rules: {},
	},
];
