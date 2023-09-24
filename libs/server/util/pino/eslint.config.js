const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/pino/**/*.ts",
			"libs/server/util/pino/**/*.tsx",
			"libs/server/util/pino/**/*.js",
			"libs/server/util/pino/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/pino/**/*.ts", "libs/server/util/pino/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/pino/**/*.js", "libs/server/util/pino/**/*.jsx"],
		rules: {},
	},
];
