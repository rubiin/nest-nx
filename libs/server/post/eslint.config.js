const baseConfig = require("../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/post/**/*.ts",
			"libs/server/post/**/*.tsx",
			"libs/server/post/**/*.js",
			"libs/server/post/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/post/**/*.ts", "libs/server/post/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/post/**/*.js", "libs/server/post/**/*.jsx"],
		rules: {},
	},
];
