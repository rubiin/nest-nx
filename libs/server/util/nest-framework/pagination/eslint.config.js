const baseConfig = require("../../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/nest-framework/pagination/**/*.ts",
			"libs/server/util/nest-framework/pagination/**/*.tsx",
			"libs/server/util/nest-framework/pagination/**/*.js",
			"libs/server/util/nest-framework/pagination/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/pagination/**/*.ts",
			"libs/server/util/nest-framework/pagination/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/pagination/**/*.js",
			"libs/server/util/nest-framework/pagination/**/*.jsx",
		],
		rules: {},
	},
];
