module.exports = {
  extends: 'airbnb',
  env: {
    'browser': true,
  },
  rules: {
    'no-console': 0,
    'react/destructuring-assignment': 0,
    'no-plusplus': [2, { 'allowForLoopAfterthoughts': true }],
  },
};
