const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/crud/**/*.ts",
			"libs/server/util/crud/**/*.tsx",
			"libs/server/util/crud/**/*.js",
			"libs/server/util/crud/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/crud/**/*.ts", "libs/server/util/crud/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/crud/**/*.js", "libs/server/util/crud/**/*.jsx"],
		rules: {},
	},
];
