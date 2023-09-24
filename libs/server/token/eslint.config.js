const baseConfig = require("../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/token/**/*.ts",
			"libs/server/token/**/*.tsx",
			"libs/server/token/**/*.js",
			"libs/server/token/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/token/**/*.ts", "libs/server/token/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/token/**/*.js", "libs/server/token/**/*.jsx"],
		rules: {},
	},
];
