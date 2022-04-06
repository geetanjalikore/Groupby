const isEqual = require('./isEqual.js').isEqual;

const countOccurence = function (element, groups) {
  for (let index = 0; index < groups.length; index++) {
    if (isEqual(element, groups[index][0])) {
      groups[index][1]++;
      return groups;
    }
  }
  groups.push([element, 1]);
  return groups;
};

const frequencies = function (batch) {
  const groups = [];
  for (let index = 0; index < batch.length; index++) {
    countOccurence(batch[index], groups);
  }
  return groups;
};

exports.countFrequencies = frequencies;
