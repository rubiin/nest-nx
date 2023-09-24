const baseConfig = require("../../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/nest-framework/middlewares/**/*.ts",
			"libs/server/util/nest-framework/middlewares/**/*.tsx",
			"libs/server/util/nest-framework/middlewares/**/*.js",
			"libs/server/util/nest-framework/middlewares/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/middlewares/**/*.ts",
			"libs/server/util/nest-framework/middlewares/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/middlewares/**/*.js",
			"libs/server/util/nest-framework/middlewares/**/*.jsx",
		],
		rules: {},
	},
];
