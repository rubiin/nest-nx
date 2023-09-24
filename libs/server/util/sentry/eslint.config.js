const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/sentry/**/*.ts",
			"libs/server/util/sentry/**/*.tsx",
			"libs/server/util/sentry/**/*.js",
			"libs/server/util/sentry/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/sentry/**/*.ts", "libs/server/util/sentry/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/sentry/**/*.js", "libs/server/util/sentry/**/*.jsx"],
		rules: {},
	},
];
