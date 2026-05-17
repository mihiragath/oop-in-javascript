let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}

console.log(factorial);

//recursive method
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(n));
