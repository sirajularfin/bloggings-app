module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'sonarjs',
    'import',
    'react-hooks',
    'unused-imports',
    'prettier',
    'simple-import-sort',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'eslint:recommended',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
  ],
  rules: {
    indent: 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-empty-function': 'off',
    'react/display-name': 'off',
    'prettier/prettier': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'no-magic-numbers': 'error',
    'simple-import-sort/imports': 'error',
    'no-console': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': ['error', { skipUndeclared: true }],
    'id-length': [2, { exceptions: ['x', 'y', '_', 'a', 'b'], properties: 'never' }],
    'import/default': 'off',
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'import/no-cycle': [
      'error',
      {
        maxDepth: 10,
        ignoreExternal: true,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native-size-matters',
            message: 'Please use "react-native-size-matters/extend" instead.',
          },
        ],
      },
    ],
    'import/no-self-import': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.ts', '.tsx', '.js', '.json', '.svg'],
      },
    },
  },
};
