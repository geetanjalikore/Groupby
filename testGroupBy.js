const assert = require('./assert.js').assert;
const lib = require('./groupBy.js');
const groupElements = lib.groupElements;

const testGroupElements = function (list, expected, description) {
  const actual = groupElements(list);
  assert(actual, expected, description);
};

const groupElementsTests = function () {
  testGroupElements([], [], 'Empty array');
};

groupElementsTests();
