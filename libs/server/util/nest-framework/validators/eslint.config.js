const baseConfig = require("../../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/nest-framework/validators/**/*.ts",
			"libs/server/util/nest-framework/validators/**/*.tsx",
			"libs/server/util/nest-framework/validators/**/*.js",
			"libs/server/util/nest-framework/validators/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/validators/**/*.ts",
			"libs/server/util/nest-framework/validators/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/server/util/nest-framework/validators/**/*.js",
			"libs/server/util/nest-framework/validators/**/*.jsx",
		],
		rules: {},
	},
];
