const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/rabbitmq/**/*.ts",
			"libs/server/util/rabbitmq/**/*.tsx",
			"libs/server/util/rabbitmq/**/*.js",
			"libs/server/util/rabbitmq/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/rabbitmq/**/*.ts", "libs/server/util/rabbitmq/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/rabbitmq/**/*.js", "libs/server/util/rabbitmq/**/*.jsx"],
		rules: {},
	},
];
