const baseConfig = require("../../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/nest-framework/misc/**/*.ts",
			"libs/server/util/nest-framework/misc/**/*.tsx",
			"libs/server/util/nest-framework/misc/**/*.js",
			"libs/server/util/nest-framework/misc/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/misc/**/*.ts",
			"libs/server/util/nest-framework/misc/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/misc/**/*.js",
			"libs/server/util/nest-framework/misc/**/*.jsx",
		],
		rules: {},
	},
];
