function removeDuplicates(array) {
  let testArray = [];
  for (let i = 0; i < array.length; i++) {
    if (testArray.indexOf(array[i]) === -1) {
      testArray.push(array[i]);
    }
  }
  return testArray;
}
let array = [1, 1, 2, 3, 4, 1, 2, 5, 7, 8, 0];
console.log(removeDuplicates(array));
