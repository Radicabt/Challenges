function transformArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 10) {
            newArray.push(array[i] * 2);
        } else {
            newArray.push(array[i] * 4);
        }
    }
    return newArray;
}

let array = [1, 5, 10, 11, 20, 34];
console.log(transformArray(array)); 
