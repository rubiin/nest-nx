const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/types/**/*.ts",
			"libs/server/util/types/**/*.tsx",
			"libs/server/util/types/**/*.js",
			"libs/server/util/types/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/types/**/*.ts", "libs/server/util/types/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/types/**/*.js", "libs/server/util/types/**/*.jsx"],
		rules: {},
	},
];
