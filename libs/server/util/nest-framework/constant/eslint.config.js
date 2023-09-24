const baseConfig = require("../../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/nest-framework/constant/**/*.ts",
			"libs/server/util/nest-framework/constant/**/*.tsx",
			"libs/server/util/nest-framework/constant/**/*.js",
			"libs/server/util/nest-framework/constant/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/constant/**/*.ts",
			"libs/server/util/nest-framework/constant/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/constant/**/*.js",
			"libs/server/util/nest-framework/constant/**/*.jsx",
		],
		rules: {},
	},
];
