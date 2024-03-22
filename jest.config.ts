import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
    // [...]
    testMatch: ["**/tests/**/*.ts"],
    extensionsToTreatAsEsm: ['.ts'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    transform: {
        // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
        // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                useESM: true,
            },
        ],
    },
    reporters: [
        "default",
        ["./node_modules/jest-html-reporter", {
            pageTitle: "esm-jest-typescript-sample3162024",
            collapseSuitesByDefault: true,
            includeConsoleLog: true
        }],
        ["jest-html-reporters", {
            publicPath: "./html-report",
            filename: "report.html",
            openReport: true,
            expand: true,
            pageTitle: "ESM Jest Typescript sample proejct 3-16-2024",
        }]
    ],
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
}

export default jestConfig