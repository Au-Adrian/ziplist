function zipList(listOne, listTwo) {
  const zippedList = [];
  for (let i = 0; i < listOne.length; i++) {
    zippedList.push(listOne[i], listTwo[i]);
  }
  return zippedList;
}

const testListOne = ['a', 'b', 'c'];
const testListTwo = [1, 2, 3];

console.log(zipList(testListOne, testListTwo));

function zipListTheSimpleWay(listOne, listTwo) {
  return _.flatten(_.zip(listTwo, listOne));
}
console.log(zipListTheSimpleWay(testListTwo, testListOne));
