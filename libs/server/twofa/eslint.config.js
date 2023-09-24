const baseConfig = require("../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/twofa/**/*.ts",
			"libs/server/twofa/**/*.tsx",
			"libs/server/twofa/**/*.js",
			"libs/server/twofa/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/twofa/**/*.ts", "libs/server/twofa/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/twofa/**/*.js", "libs/server/twofa/**/*.jsx"],
		rules: {},
	},
];
