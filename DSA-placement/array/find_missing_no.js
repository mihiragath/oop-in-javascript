let arr = [1, 2, 3, 5];

let n = 5;

let expectedSum = (n * (n + 1)) / 2;

let actualSum = 0;

for (let i = 0; i < arr.length; i++) {
  actualSum += arr[i];
}

let missing = expectedSum - actualSum;

console.log(missing);
