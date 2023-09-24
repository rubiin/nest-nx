const baseConfig = require("../../../../eslint.config.js");
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/cloudinary/**/*.ts",
			"libs/server/util/cloudinary/**/*.tsx",
			"libs/server/util/cloudinary/**/*.js",
			"libs/server/util/cloudinary/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/cloudinary/**/*.ts", "libs/server/util/cloudinary/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/cloudinary/**/*.js", "libs/server/util/cloudinary/**/*.jsx"],
		rules: {},
	},
];
