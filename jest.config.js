module.exports = {
	coverageDirectory: './test/coverage/',
	collectCoverage: true,
	roots: ['./test'],
	testEnvironment: 'node',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	"setupFilesAfterEnv": ["./test/dbHandler.ts"],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
