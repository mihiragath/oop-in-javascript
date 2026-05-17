//using second array
let a = [1, 2, 2, 3, 4, 4, 5];
let result = [];

for (let i = 0; i < a.length; i++) {
  if (a[i] !== a[i + 1]) {
    result.push(a[i]);
  }
}
console.log(result);

//without using second array
let index = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] !== a[i + 1]) {
    a[index] = a[i];
    index++;
  }
}

a.length = index;
console.log(a);

//unsorted array remove duplicates
let arr = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(arr)];
console.log(unique);
