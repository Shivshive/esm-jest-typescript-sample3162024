/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {

  preset:'ts-jest/presets/default-esm',
  testMatch:["**/**.ts"],
  extensionsToTreatAsEsm:[".ts",".tsx",".js",".jsx"],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        isolatedModules: true,
        useESM: true,
      },
    ],
  },
}