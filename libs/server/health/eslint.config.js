const baseConfig = require("../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/health/**/*.ts",
			"libs/server/health/**/*.tsx",
			"libs/server/health/**/*.js",
			"libs/server/health/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/health/**/*.ts", "libs/server/health/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/health/**/*.js", "libs/server/health/**/*.jsx"],
		rules: {},
	},
];
