module.exports = {
    // other rules...
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./tsconfig.json', './tsconfig.node.json'],
      tsconfigRootDir: __dirname,
    },
    extends: [
      'plugin:@typescript-eslint/recommended-type-checked',  // updated type-checked rules
      'plugin:react/recommended',  // for React linting
      'plugin:react/jsx-runtime',  // for JSX linting
      // add more plugins or rules as needed
    ],
    // other configuration...
  };
  