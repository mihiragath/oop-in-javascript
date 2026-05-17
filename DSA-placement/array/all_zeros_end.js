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
let a = [1, 0, 2, 0, 3, 4, 0, 5];

let index = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] !== 0) {
    a[index] = a[i];
    index++;
  }
}

while (index < a.length) {
  a[index] = 0;
  index++;
}

console.log(a);
