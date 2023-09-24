const baseConfig = require("../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/user/**/*.ts",
			"libs/server/user/**/*.tsx",
			"libs/server/user/**/*.js",
			"libs/server/user/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/user/**/*.ts", "libs/server/user/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/user/**/*.js", "libs/server/user/**/*.jsx"],
		rules: {},
	},
];
