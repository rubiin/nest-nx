/* eslint-disable */
export default {
	displayName: "server-util-pino",
	preset: "../../../../jest.preset.js",
	testEnvironment: "node",
	transform: {
		"^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
	},
	moduleFileExtensions: ["ts", "js", "html"],
	coverageDirectory: "../../../../coverage/libs/server/util/pino",
};
