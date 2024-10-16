module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        '^.+\\.(css|less)$': '<rootDir>/src/test-utils/CSSStub.ts'
    }
};