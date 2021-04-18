module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|js)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['./setupTests.js'],
  moduleNameMapper: {
    '@components(.*)': '<rootDir>/src/components/$1',
    '@domain(.*)': '<rootDir>/src/domain/$1',
    '@helpers(.*)': '<rootDir>/src/helpers/$1',
    '@styles(.*)': '<rootDir>/src/styles/$1',
    '@theme(.*)': '<rootDir>/src/theme/$1',
    '@utils(.*)': '<rootDir>/src/utils/$1',
  },
  moduleDirectories: ['node_modules', 'test', __dirname],
  // "snapshotSerializers": ["enzyme-to-json/serializer"], // this is for enzyme

  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
    },
  },
};
