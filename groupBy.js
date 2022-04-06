const areEqual = function (argument1, argument2) {
  if (!Array.isArray(argument1) || !Array.isArray(argument2)) {
    return argument1 === argument2;
  }

  if (argument1.length !== argument2.length) {
    return false;
  }

  for (let index = 0; index < argument2.length; index++) {
    if (!areEqual(argument1[index], argument2[index])) {
      return false;
    }
  }
  return true;
};

const groupBy = function (element, groupedElements) {
  const groups = groupedElements.slice(0);
  for (let index = 0; index < groups.length; index++) {
    if (areEqual(element, groups[index][0])) {
      groups[index].push(element);
      return groups;
    }
  }
  groups.push([element]);
  return groups;
};

const groupElements = function (batch) {
  let groups = [];
  for (let index = 0; index < batch.length; index++) {
    groups = groupBy(batch[index], groups);
  }
  return groups;
};

console.log(groupElements([]));
console.log(groupElements([1]));
console.log(groupElements([1, 3]));
console.log(groupElements([1, 2, 1]));
console.log(groupElements([1, 2, 3, 1, 2, 4]));
console.log(groupElements([[1, 1], 1, [1, 1], 1]));
console.log(groupElements([[1, [1, 1]], 1, [1, [1, 1]], 1]));
