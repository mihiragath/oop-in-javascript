let n = 10;

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
  let c = a + b;

  console.log(c);

  a = b;
  b = c;
}

//using recursion
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = 10;

for (let i = 0; i < n; i++) {
  console.log(fibonacci(i));
}
