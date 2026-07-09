let subArray = [[1,2],[3,4],[5,6]];
let maxSum = -Infinity;
let maxSubArray = [];

for (let i = 0; i < subArray.length; i++) {
    let currentSum = 0;
    for (let j = 0; j < subArray[i].length; j++) {
        currentSum += subArray[i][j];
    }
    if (currentSum > maxSum) {
        maxSum = currentSum;
        maxSubArray = subArray[i];
    }
}
console.log("Maximum sum:", maxSum);
console.log("Subarray with maximum sum:", maxSubArray);

//optimized approach
let maxSumOptimized = -Infinity;
let maxSubArrayOptimized = [];

for (let i = 0; i < subArray.length; i++) {
    let currentSum = subArray[i].reduce((acc, val) => acc + val, 0);    
    if (currentSum > maxSumOptimized) {
        maxSumOptimized = currentSum;
        maxSubArrayOptimized = subArray[i];
    }
}
console.log("Maximum sum (optimized):", maxSumOptimized);
console.log("Subarray with maximum sum (optimized):", maxSubArrayOptimized);

//using Math.max and Math.min
let maxSumMath = Math.max(...subArray.map(sub => sub.reduce((acc, val) => acc + val, 0)));
let maxSubArrayMath = subArray[subArray.map(sub => sub.reduce((acc, val) => acc + val, 0)).indexOf(maxSumMath)];
console.log("Maximum sum (Math):", maxSumMath);
console.log("Subarray with maximum sum (Math):", maxSubArrayMath);