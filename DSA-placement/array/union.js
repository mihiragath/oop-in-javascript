let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

let union = [...new Set([...arr1, ...arr2])];
console.log(union); // Output: [1, 2, 3, 4]
