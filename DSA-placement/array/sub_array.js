let arr = [1,2,3,4];
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