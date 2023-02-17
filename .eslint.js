const path = require('path');

const tsConfigPath = path.resolve(__dirname, './tsconfig.json');

module.exports = {
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript', '../../.eslintrc.js'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    project: tsConfigPath
  },
  plugins: ['react', 'import', 'jsx-a11y', 'react-hooks'],
  env: {
    jest: true,
    es6: true,
    browser: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['src/']
      },
      typescript: {
        alwaysTryTypes: true,
        project: tsConfigPath
      }
    },
    react: {
      version: 'detect'
    }
  },
  rules: {
    // TODO: unmute https://adlib-digital.atlassian.net/browse/AL-4279
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase']
      },

      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'property',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase']
      },
      {
        selector: 'enum',
        format: ['PascalCase']
      },
      {
        selector: 'enumMember',
        format: ['PascalCase']
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase']
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',

    'array-callback-return': 'error',
    'consistent-return': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'warn',
    'no-restricted-globals': 'warn',
    radix: 'off',

    // IMPORT
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        packageDir: [path.resolve(__dirname, '../../'), path.resolve(__dirname, './')]
      }
    ],

    // JSX-A11Y
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/no-autofocus': 'off',

    // TODO: ENABLE THESE RULES LATER
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',

    // REACT
    'react-hooks/exhaustive-deps': ['error', {additionalHooks: 'useAsync'}],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
        when: 'multiline'
      }
    ],
    'react/default-props-match-prop-types': 'off',
    'react/display-name': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',

    // TODO: ENABLE THESE RULES LATER
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-no-bind': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/no-array-index-key': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-string-refs': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'off',
    'react/prefer-stateless-function': 'off',
    'react/sort-comp': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off'
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off'
      }
    }
  ]
};
