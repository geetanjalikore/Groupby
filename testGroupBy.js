const assert = require('./assert.js').assert;
const lib = require('./groupBy.js');
const groupElements = lib.groupElements;

const testGroupElements = function (list, expected, description) {
  const actual = groupElements(list);
  assert(actual, expected, description);
};

const groupElementsTests = function () {
  testGroupElements([], [], 'Empty array');
  testGroupElements([1], [[1]], 'One entity in array');
  testGroupElements([1, 3], [[1], [3]], 'unique entities in array');
  testGroupElements([1, 2, 1], [[1, 1], [2]], 'Identical element in array');
  testGroupElements([1, 2, 3, 1, 2, 4], [[1, 1], [2, 2], [3], [4]], 'Identical elements in array');
  testGroupElements([[1, 1], 1, [1, 1], 1], [[[1, 1], [1, 1]], [1, 1]], 'Identical arrays');
  testGroupElements([[1, [1, 1]], 1, [1, [1, 1]], 1], [[[1, [1, 1]], [1, [1, 1]]], [1, 1]], 'Nested Identical arrays');

};

groupElementsTests();
