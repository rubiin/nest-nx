const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/cache/**/*.ts",
			"libs/server/util/cache/**/*.tsx",
			"libs/server/util/cache/**/*.js",
			"libs/server/util/cache/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/cache/**/*.ts", "libs/server/util/cache/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/cache/**/*.js", "libs/server/util/cache/**/*.jsx"],
		rules: {},
	},
];
