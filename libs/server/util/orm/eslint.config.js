const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/orm/**/*.ts",
			"libs/server/util/orm/**/*.tsx",
			"libs/server/util/orm/**/*.js",
			"libs/server/util/orm/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/orm/**/*.ts", "libs/server/util/orm/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/orm/**/*.js", "libs/server/util/orm/**/*.jsx"],
		rules: {},
	},
];
