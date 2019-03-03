const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];



function mergeTwo(arr1, arr2) {
    let result = [...arr1, ...arr2];
    return result.sort((a, b) => a - b);
}

console.log(mergeTwo(arr1, arr2));