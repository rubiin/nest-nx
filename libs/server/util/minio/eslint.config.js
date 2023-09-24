const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/minio/**/*.ts",
			"libs/server/util/minio/**/*.tsx",
			"libs/server/util/minio/**/*.js",
			"libs/server/util/minio/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/minio/**/*.ts", "libs/server/util/minio/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/minio/**/*.js", "libs/server/util/minio/**/*.jsx"],
		rules: {},
	},
];
