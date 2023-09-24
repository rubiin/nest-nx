const baseConfig = require("../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/category/**/*.ts",
			"libs/server/category/**/*.tsx",
			"libs/server/category/**/*.js",
			"libs/server/category/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/category/**/*.ts", "libs/server/category/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/category/**/*.js", "libs/server/category/**/*.jsx"],
		rules: {},
	},
];
