// var a = [5], count = 5;
// var missing = new Array();

// for (var i = 1; i <= count; i++) {
//     if (a.indexOf(i) == -1) {
//         missing.push(i);
//     }
// }
// console.log(missing);

//1. Get the sum of numbers 
//     total = n*(n+1)/2
//2  Subtract all the numbers from sum and
// you will get the missing number.

function missingNumber(arr) {
    var n = arr.length + 1,
        sum = 0,
        expectedSum = n * (n + 1) / 2;

    for (var i = 0, len = arr.length; i < len; i++) {
        sum += arr[i];
    }

    return expectedSum - sum;
}
console.log(missingNumber([5, 2, 6, 1, 3]));