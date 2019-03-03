var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];
var finalArray = [];
const objMap = {};

function compare(firstArray, secondArray) {
    firstArray.forEach(e1 => {
        secondArray.forEach(e2 => {
            if (e1 === e2) {
                finalArray.push(e1);
            }
        })

    });
    return finalArray;

}
var common = compare(firstArray, secondArray);
console.log(common);