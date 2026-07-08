let arr = [2, 3, 10, 6, 4, 8, 1];
let min = arr[0];
let maxDiff1 = arr[1] - arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] - min > maxDiff1) {
        maxDiff1 = arr[i] - min;
    }
}
console.log(maxDiff1);

//using Math.min and Math.max
let maxDiff2 = Math.max(...arr) - Math.min(...arr);
console.log(maxDiff2);

//using sort method
let sortedArr = [...arr].sort((a, b) => a - b);
let maxDiff3 = sortedArr[sortedArr.length - 1] - sortedArr[0];
console.log(maxDiff3);
