const baseConfig = require("../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/auth/**/*.ts",
			"libs/server/auth/**/*.tsx",
			"libs/server/auth/**/*.js",
			"libs/server/auth/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/auth/**/*.ts", "libs/server/auth/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/auth/**/*.js", "libs/server/auth/**/*.jsx"],
		rules: {},
	},
];
