export default [
  {
    files: ['**/*.js'], //check only .js files in server directory
    rules: {
      semi: 'error', //force semi colons
      'no-unused-vars': 'warn', //warn if variables are unused
    },
  },
];
