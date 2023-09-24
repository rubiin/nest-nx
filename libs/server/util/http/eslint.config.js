const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/http/**/*.ts",
			"libs/server/util/http/**/*.tsx",
			"libs/server/util/http/**/*.js",
			"libs/server/util/http/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/http/**/*.ts", "libs/server/util/http/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/http/**/*.js", "libs/server/util/http/**/*.jsx"],
		rules: {},
	},
];
