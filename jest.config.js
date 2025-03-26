/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/emptyImageMock.js",
  },
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
};
