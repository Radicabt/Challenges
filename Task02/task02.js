function removeDuplicates(array) {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}
let array = [1, 1, 2, 3, 4, 1, 2, 5, 7, 8, 0];
console.log(removeDuplicates(array)); 
