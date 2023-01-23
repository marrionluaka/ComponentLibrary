module.exports = {
  // preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  transformIgnorePatterns: ['/node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'vue', 'pug', 'json', 'svg'],
  globals: {
    'ts-jest': {
      compiler: 'typescript'
    },
    '@vue/vue3-jest': {
      pug: {
        filename: 'pug',
        doctype: 'html',
        basedir: './'
      }
    }
  }
}
