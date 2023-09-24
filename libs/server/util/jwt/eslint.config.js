const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/jwt/**/*.ts",
			"libs/server/util/jwt/**/*.tsx",
			"libs/server/util/jwt/**/*.js",
			"libs/server/util/jwt/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/jwt/**/*.ts", "libs/server/util/jwt/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/jwt/**/*.js", "libs/server/util/jwt/**/*.jsx"],
		rules: {},
	},
];
