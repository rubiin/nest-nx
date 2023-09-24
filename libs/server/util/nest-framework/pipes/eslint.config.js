const baseConfig = require("../../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/nest-framework/pipes/**/*.ts",
			"libs/server/util/nest-framework/pipes/**/*.tsx",
			"libs/server/util/nest-framework/pipes/**/*.js",
			"libs/server/util/nest-framework/pipes/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/pipes/**/*.ts",
			"libs/server/util/nest-framework/pipes/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/pipes/**/*.js",
			"libs/server/util/nest-framework/pipes/**/*.jsx",
		],
		rules: {},
	},
];
