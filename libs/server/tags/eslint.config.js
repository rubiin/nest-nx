const baseConfig = require("../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/tags/**/*.ts",
			"libs/server/tags/**/*.tsx",
			"libs/server/tags/**/*.js",
			"libs/server/tags/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/tags/**/*.ts", "libs/server/tags/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/tags/**/*.js", "libs/server/tags/**/*.jsx"],
		rules: {},
	},
];
