/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest/presets/default-esm", // Use preset for ES Modules
  testEnvironment: "node",
  transformIgnorePatterns: [
    '/node_modules/(?!chalk)/', // Allow transformation of chalk module
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest', // Only use ts-jest for TypeScript files
    "^.+\\.(js|jsx)$": "babel-jest", // Use babel-jest for JS files
  },
  moduleFileExtensions: ["ts", "js", "jsx", "json"],
  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: "tsconfig.test.json", // Ensure correct tsconfig for testing
    },
  },
};
