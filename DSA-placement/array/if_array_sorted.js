//check
let a = [1, 2, 3, 4, 5];
let isSorted = true;

for (let i = 0; i < a.length - 1; i++) {
  if (a[i] > a[i + 1]) {
    isSorted = false;
    break;
  }
}

console.log(isSorted);

//sorting
let arr = [5, 2, 4, 1, 3];
let sorted = arr.sort((a, b) => a - b);
console.log(sorted);
