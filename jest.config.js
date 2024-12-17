/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: "ts-jest",
    testEnvironment: "node",
    transformIgnorePatterns: [
      '/node_modules/(?!chalk)/',
    ],
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "js", "json"],
    globals: {
      "ts-jest": {
        useESM: true,
        tsconfig: "tsconfig.test.json",
      },
    },
  };
  
  