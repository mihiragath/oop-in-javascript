//using second array
let a = [1, 0, 2, 0, 3, 4, 0, 5];

let result = [];
let count = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] === 0) {
    count++;
  } else {
    result.push(a[i]);
  }
}

for (let i = 0; i < count; i++) {
  result.push(0);
}

console.log(result);

//without using second array
let arr = [1, 0, 2, 0, 3, 4, 0, 5];

let index = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    arr[index] = arr[i];
    index++;
  }
}

while (index < arr.length) {
  arr[index] = 0;
  index++;
}

console.log(arr);
