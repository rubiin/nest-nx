const { FlatCompat } = require("@eslint/eslintrc");
const baseConfig = require("../../../../eslint.config.js");
const js = require("@eslint/js");
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
});
module.exports = [
	...baseConfig,
	{
		files: [
			"libs/server/util/aws/**/*.ts",
			"libs/server/util/aws/**/*.tsx",
			"libs/server/util/aws/**/*.js",
			"libs/server/util/aws/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/server/util/aws/**/*.ts", "libs/server/util/aws/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/server/util/aws/**/*.js", "libs/server/util/aws/**/*.jsx"],
		rules: {},
	},
	...compat.config({ parser: "jsonc-eslint-parser" }).map(config => ({
		...config,
		files: ["libs/server/util/aws/**/*.json"],
		rules: { "@nx/dependency-checks": "error" },
	})),
];
