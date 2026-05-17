let n = 6;

let sum = 0;

for (let i = 1; i < n; i++) {
  if (n % i === 0) {
    sum += i;
  }
}

if (sum === n) {
  console.log("Perfect Number");
} else {
  console.log("Not Perfect Number");
}

//using recursion
let n = 6;

function perfect(num, i = 1, sum = 0) {
  if (i === num) {
    return sum;
  }

  if (num % i === 0) {
    sum += i;
  }

  return perfect(num, i + 1, sum);
}

let result = perfect(n);

if (result === n) {
  console.log("Perfect Number");
} else {
  console.log("Not Perfect Number");
}

// 6

// Divisors:
// 1, 2, 3

// 1 + 2 + 3 = 6
