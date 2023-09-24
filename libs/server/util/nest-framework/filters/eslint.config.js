const baseConfig = require("../../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/nest-framework/filters/**/*.ts",
			"libs/server/util/nest-framework/filters/**/*.tsx",
			"libs/server/util/nest-framework/filters/**/*.js",
			"libs/server/util/nest-framework/filters/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/filters/**/*.ts",
			"libs/server/util/nest-framework/filters/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/filters/**/*.js",
			"libs/server/util/nest-framework/filters/**/*.jsx",
		],
		rules: {},
	},
];
