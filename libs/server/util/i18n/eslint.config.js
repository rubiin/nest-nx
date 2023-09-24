const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/i18n/**/*.ts",
			"libs/server/util/i18n/**/*.tsx",
			"libs/server/util/i18n/**/*.js",
			"libs/server/util/i18n/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/i18n/**/*.ts", "libs/server/util/i18n/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/i18n/**/*.js", "libs/server/util/i18n/**/*.jsx"],
		rules: {},
	},
];
