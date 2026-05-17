let a = [1, 2, 3, 4, 5];
let k = 2;
k = k % a.length;
for (let i = 0; i < k; i++) {
  let temp = a[a.length - 1];
  for (let j = a.length - 1; j > 0; j--) {
    a[j] = a[j - 1];
  }
  a[0] = temp;
}
console.log(a);

//using sliceing
let result = a.slice(-k).concat(a.slice(0, -k)); //right shift
let result = a.slice(k).concat(a.slice(0, k)); //left shift
console.log(result);

//using reversing method
let arr = [1, 2, 3, 4, 5];
let k = 2;

k = k % arr.length;

function reverse(a, start, end) {
  while (start < end) {
    let temp = a[start];
    a[start] = a[end];
    a[end] = temp;

    start++;
    end--;
  }
}

//step 1 → reverse entire array
reverse(arr, 0, arr.length - 1); //[5, 4, 3, 2, 1]
//step 2 → reverse first k elements
reverse(arr, 0, k - 1); //[4, 5, 3, 2, 1]
//step 3 → reverse remaining elements
reverse(arr, k, arr.length - 1); //[4, 5, 1, 2, 3]

console.log(arr);
