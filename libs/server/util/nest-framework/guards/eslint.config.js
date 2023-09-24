const baseConfig = require("../../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/nest-framework/guards/**/*.ts",
			"libs/server/util/nest-framework/guards/**/*.tsx",
			"libs/server/util/nest-framework/guards/**/*.js",
			"libs/server/util/nest-framework/guards/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/guards/**/*.ts",
			"libs/server/util/nest-framework/guards/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/guards/**/*.js",
			"libs/server/util/nest-framework/guards/**/*.jsx",
		],
		rules: {},
	},
];
