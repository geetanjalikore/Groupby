const assert = require('./assert.js').assert;
const lib = require('./countFrequencies.js');
const countFrequencies = lib.countFrequencies;

const testCountFrequencies = function (list, expected, description) {
  const actual = countFrequencies(list);
  assert(actual, expected, description);
};

const countFrequenciesTests = function () {
  testCountFrequencies([], [], 'Empty array');
  testCountFrequencies([1], [[1, 1]], 'One entity in array');
  testCountFrequencies([1, 3], [[1, 1], [3, 1]], 'unique entities in array');
  testCountFrequencies([1, 2, 1], [[1, 2], [2, 1]], 'Identical element in array');
  testCountFrequencies([1, 2, 3, 1, 2, 4], [[1, 2], [2, 2], [3, 1], [4, 1]], 'Identical elements in array');
  testCountFrequencies([[1, 1], 1, [1, 1], 1], [[[1, 1], 2], [1, 2]], 'Identical arrays');
  testCountFrequencies([[1, [1, 1]], 1, [1, [1, 1]], 1], [[[1, [1, 1]], 2], [1, 2]], 'Nested Identical arrays');
};

countFrequenciesTests();
