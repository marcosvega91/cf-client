const fs = require('fs')
const path = require('path')

module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: fs.existsSync('src/setupTests.ts') ? ['<rootDir>/src/setupTests.ts'] : [],
  moduleDirectories: ['node_modules', path.join(__dirname, './src')],
  collectCoverageFrom: ['src/**/*.ts', '!<rootDir>/src/test/**/*'],
}
