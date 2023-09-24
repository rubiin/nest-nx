const baseConfig = require("../../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/nest-framework/decorators/**/*.ts",
			"libs/server/util/nest-framework/decorators/**/*.tsx",
			"libs/server/util/nest-framework/decorators/**/*.js",
			"libs/server/util/nest-framework/decorators/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/decorators/**/*.ts",
			"libs/server/util/nest-framework/decorators/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/decorators/**/*.js",
			"libs/server/util/nest-framework/decorators/**/*.jsx",
		],
		rules: {},
	},
];
