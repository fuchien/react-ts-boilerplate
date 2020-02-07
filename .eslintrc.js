module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'react-app',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'import', 'jsx-a11y'],
    rules: {
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.tsx', 'ts'],
            },
        ],
        'import/prefer-default-export': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
    },
    settings: {
        "import/extensions": ["error",
        "ignorePackages",
        {
          "ts": "never",
          "tsx": "never",
          "js": "never",
          "jsx": "never"
        }],
        "import/parsers": {
            "@typescript-eslint/parser": [".ts",".tsx"]
        },
        "import/resolver": {
            "node": {
                "extensions": [".js",".jsx",".ts",".tsx"]
            },
            typescript: {}
        }
    }
}
