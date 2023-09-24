const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/config/**/*.ts",
			"libs/server/util/config/**/*.tsx",
			"libs/server/util/config/**/*.js",
			"libs/server/util/config/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/config/**/*.ts", "libs/server/util/config/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/config/**/*.js", "libs/server/util/config/**/*.jsx"],
		rules: {},
	},
];
