module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-console': 'error',
    'no-use-before-define': 'error',
    'no-param-reassign': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'max-lines': ['error', {max: 300, skipBlankLines: true}],
    'no-nested-ternary': 'error',
    'no-plusplus': 'error',
    'prefer-spread': 'warn',
    'no-unused-vars': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'eol-last': ['error', 'always'],
    'prettier/prettier': 0,
    'prefer-destructuring': [
      'warn',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'max-len': ['error', {code: 100, ignoreStrings: true}],
    'no-spaced-func': 0,
  },
};
