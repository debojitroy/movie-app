module.exports = {
	preset: 'ts-jest',
	// Automatically clear mock calls and instances between every test
	clearMocks: true,

	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: true,

	// An array of glob patterns indicating a set of files for which coverage information should be collected
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/**/index.{ts,tsx}',
		'!src/**/styled.{ts,tsx}',
		'!src/**/*.stories.{ts,tsx}',
		'!node_modules/',
		'!.storybook',
		'!dist/',
		'!lib/',
	],

	// The directory where Jest should output its coverage files
	coverageDirectory: 'coverage',

	// An array of regexp pattern strings used to skip test files
	testPathIgnorePatterns: ['/node_modules/', '/lib/', '/dist/'],

	// A list of reporter names that Jest uses when writing coverage reports
	coverageReporters: ['text', 'html', 'json'],

	// An array of file extensions your modules use
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

	// A list of paths to modules that run some code to configure or set up the testing framework before each test
	setupFilesAfterEnv: ['./setupTests.js'],

	// A list of paths to snapshot serializer modules Jest should use for snapshot testing
	snapshotSerializers: ['enzyme-to-json/serializer'],
};
