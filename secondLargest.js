var arr = [20, 120, 111, 215, 54, 78];
var max = Math.max.apply(null, arr);
console.log(max);
arr.splice(arr.indexOf(max), 1);
var secondLargest = Math.max.apply(null, arr);
console.log(secondLargest);