let arr = [1, 2, 3, 4];
let subArray = arr.slice(1, 3); // Extracts elements at indices 1 and 2
console.log(subArray);

//total number of subarrays in an array of size n is n*(n+1)/2
let n = arr.length;
let totalSubarrays = (n * (n + 1)) / 2;
let subarrays = [];
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    subarrays.push(arr.slice(i, j + 1));
  }
}
console.log(subarrays);
console.log(totalSubarrays);

//without slice method
let subarraysWithoutSlice = [];
for (let i = 0; i < n; i++) {
  let subarray = [];
  for (let j = i; j < n; j++) {
    subarray.push(arr[j]);
    subarraysWithoutSlice.push([...subarray]); // Create a copy of the current subarray
  }
}
console.log(subarraysWithoutSlice);

//using backtracking
let result = [];
function backtrack(start, path) {
  result.push([...path]); // Create a copy of the current path
  for (let i = start; i < n; i++) {
    path.push(arr[i]);
    backtrack(i + 1, path);
    path.pop(); // Backtrack
  }
}
backtrack(0, []);
console.log(result);
