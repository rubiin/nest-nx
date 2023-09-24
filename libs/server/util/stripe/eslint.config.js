const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/stripe/**/*.ts",
			"libs/server/util/stripe/**/*.tsx",
			"libs/server/util/stripe/**/*.js",
			"libs/server/util/stripe/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/stripe/**/*.ts", "libs/server/util/stripe/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/stripe/**/*.js", "libs/server/util/stripe/**/*.jsx"],
		rules: {},
	},
];
