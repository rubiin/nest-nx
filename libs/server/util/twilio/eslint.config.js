const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/twilio/**/*.ts",
			"libs/server/util/twilio/**/*.tsx",
			"libs/server/util/twilio/**/*.js",
			"libs/server/util/twilio/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/twilio/**/*.ts", "libs/server/util/twilio/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/twilio/**/*.js", "libs/server/util/twilio/**/*.jsx"],
		rules: {},
	},
];
