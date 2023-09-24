const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/throttler/**/*.ts",
			"libs/server/util/throttler/**/*.tsx",
			"libs/server/util/throttler/**/*.js",
			"libs/server/util/throttler/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/throttler/**/*.ts", "libs/server/util/throttler/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/throttler/**/*.js", "libs/server/util/throttler/**/*.jsx"],
		rules: {},
	},
];
