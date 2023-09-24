const baseConfig = require("../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/profile/**/*.ts",
			"libs/server/profile/**/*.tsx",
			"libs/server/profile/**/*.js",
			"libs/server/profile/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/profile/**/*.ts", "libs/server/profile/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/profile/**/*.js", "libs/server/profile/**/*.jsx"],
		rules: {},
	},
];
