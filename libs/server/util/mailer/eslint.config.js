const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/mailer/**/*.ts",
			"libs/server/util/mailer/**/*.tsx",
			"libs/server/util/mailer/**/*.js",
			"libs/server/util/mailer/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/mailer/**/*.ts", "libs/server/util/mailer/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/mailer/**/*.js", "libs/server/util/mailer/**/*.jsx"],
		rules: {},
	},
];
