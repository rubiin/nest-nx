const baseConfig = require("../../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/nest-framework/interceptors/**/*.ts",
			"libs/server/util/nest-framework/interceptors/**/*.tsx",
			"libs/server/util/nest-framework/interceptors/**/*.js",
			"libs/server/util/nest-framework/interceptors/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/interceptors/**/*.ts",
			"libs/server/util/nest-framework/interceptors/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/interceptors/**/*.js",
			"libs/server/util/nest-framework/interceptors/**/*.jsx",
		],
		rules: {},
	},
];
