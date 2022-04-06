const isEqual = require('../src/isEqual.js').isEqual;

const testIsEqual = function (lhs, rhs, expected, description) {
  const actual = isEqual(lhs, rhs);
  const status = actual === expected ? '✅' : '❌';
  console.log(status, description);
};

const isEqualTests = function () {
  testIsEqual(1, 1, true, 'LHS and RHS are equal numbers');
  testIsEqual('abc', 'abc', true, 'LHS and RHS are equal strings');
  testIsEqual([1], [1], true, 'LHS and RHS are equal arrays');
  testIsEqual(1, 2, false, 'LHS and RHS are not equal');
  testIsEqual([1], 2, false, 'LHS is array and RHS is number');
  testIsEqual([1], 'abc', false, 'LHS is array and RHS is string');
};

isEqualTests();
