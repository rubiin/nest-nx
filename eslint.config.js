const { FlatCompat } = require("@eslint/eslintrc");
const nxEslintPlugin = require("@nx/eslint-plugin");
const typescriptEslintEslintPluginEslintPlugin = require("@typescript-eslint/eslint-plugin-eslint-plugin");
const eslintPluginUnicorn = require("eslint-plugin-unicorn");
const eslintPluginSimpleImportSort = require("eslint-plugin-simple-import-sort");
const eslintPluginDeprecation = require("eslint-plugin-deprecation");
const js = require("@eslint/js");
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
});
module.exports = [
	{
		plugins: {
			"@nx": nxEslintPlugin,
			"@typescript-eslint/eslint-plugin": typescriptEslintEslintPluginEslintPlugin,
			unicorn: eslintPluginUnicorn,
			"simple-import-sort": eslintPluginSimpleImportSort,
			deprecation: eslintPluginDeprecation,
		},
	},
	{
		files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
		parserOptions: { project: ["./tsconfig.*?.json"] },
		rules: {
			"@nx/enforce-module-boundaries": [
				"error",
				{
					enforceBuildableLibDependency: true,
					allow: [],
					depConstraints: [
						{
							sourceTag: "scope:shared",
							onlyDependOnLibsWithTags: ["scope:shared"],
						},
						{
							sourceTag: "scope:backend",
							onlyDependOnLibsWithTags: ["scope:shared", "scope:backend"],
						},
						{
							sourceTag: "tye:util",
							onlyDependOnLibsWithTags: ["tye:util"],
						},
						{
							sourceTag: "scope:frontend",
							onlyDependOnLibsWithTags: ["scope:shared", "scope:frontend"],
						},
					],
				},
			],
		},
	},
	...compat
		.config({
			extends: [
				"plugin:@nx/typescript",
				"plugin:@typescript-eslint/eslint-recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:unicorn/recommended",
			],
		})
		.map(config => ({
			...config,
			files: ["**/*.ts", "**/*.tsx"],
			rules: {
				"deprecation/deprecation": "warn",
				"simple-import-sort/imports": "error",
				"simple-import-sort/exports": "error",
				"no-param-reassign": "error",
				"unicorn/filename-case": "error",
				"@typescript-eslint/no-non-null-assertion": "off",
				"unicorn/no-process-exit": "off",
				"no-array-constructor": "error",
				"no-mixed-operators": "error",
				"@typescript-eslint/no-var-requires": "off",
				"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
				"unicorn/prevent-abbreviations": "off",
				"import/namespace": "off",
				"unicorn/no-null": "off",
				"import/no-unresolved": "off",
				"unicorn/import-style": "error",
				"unicorn/no-abusive-eslint-disable": "off",
				"unicorn/prefer-module": "off",
				"unicorn/prefer-top-level-await": "off",
				"@typescript-eslint/no-explicit-any": "off",
				"@typescript-eslint/explicit-module-boundary-types": "off",
				"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
				"no-multi-spaces": "error",
				"linebreak-style": ["error", "unix"],
				"newline-before-return": "error",
				"no-await-in-loop": "error",
				"padding-line-between-statements": [
					"error",
					{
						blankLine: "always",
						prev: ["const", "let", "var"],
						next: "*",
					},
					{
						blankLine: "any",
						prev: ["const", "let", "var"],
						next: ["const", "let", "var"],
					},
				],
				"prefer-const": [
					"error",
					{
						destructuring: "any",
						ignoreReadBeforeAssign: false,
					},
				],
				quotes: [
					"error",
					"double",
					{
						allowTemplateLiterals: true,
						avoidEscape: true,
					},
				],
				"no-unused-vars": [
					"error",
					{
						varsIgnorePattern: "^_",
						ignoreRestSiblings: true,
						argsIgnorePattern: "^_",
					},
				],
				"no-console": ["error", { allow: ["warn", "error", "info", "table"] }],
			},
		})),
	...compat.config({ extends: ["plugin:@nx/javascript"] }).map(config => ({
		...config,
		files: ["**/*.js", "**/*.jsx"],
		rules: {},
	})),
	...compat.config({ env: { jest: true } }).map(config => ({
		...config,
		files: ["**/*.spec.ts", "**/*.spec.tsx", "**/*.spec.js", "**/*.spec.jsx"],
		rules: {},
	})),
];
