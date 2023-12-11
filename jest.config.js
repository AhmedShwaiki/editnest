export default {
    testEnvironment: 'node',
    testRegex: 'tests/.*\\.js$',
    moduleFileExtensions: ['js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
}
