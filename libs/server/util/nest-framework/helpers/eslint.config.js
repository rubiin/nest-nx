const baseConfig = require("../../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/nest-framework/helpers/**/*.ts",
			"libs/server/util/nest-framework/helpers/**/*.tsx",
			"libs/server/util/nest-framework/helpers/**/*.js",
			"libs/server/util/nest-framework/helpers/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/helpers/**/*.ts",
			"libs/server/util/nest-framework/helpers/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/helpers/**/*.js",
			"libs/server/util/nest-framework/helpers/**/*.jsx",
		],
		rules: {},
	},
];
