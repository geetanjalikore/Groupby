const isEqual = require('./isEqual.js').isEqual;

const countFrequency = function (element, groups) {
  for (let index = 0; index < groups.length; index++) {
    if (isEqual(element, groups[index][0])) {
      groups[index][1]++;
      return groups;
    }
  }
  groups.push([element, 1]);
  return groups;
};

const countFrequencies = function (batch) {
  const groups = [];
  for (let index = 0; index < batch.length; index++) {
    countFrequency(batch[index], groups);
  }
  return groups;
};

exports.countFrequencies = countFrequencies;
