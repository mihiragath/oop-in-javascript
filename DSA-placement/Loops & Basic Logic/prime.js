let n = 7;
let isPrime = true;

if (n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Prime Number");
} else {
  console.log("Not Prime Number");
}

//using recursion
function isPrime(n, i = 2) {
  if (n <= 1) {
    return false;
  }
    if (i >= n) {
    return true;
    }
    if (n % i === 0) {
    return false;
    }
    return isPrime(n, i + 1);
}

let n = 7;
if (isPrime(n)) {
    console.log("Prime Number");
} else {
    console.log("Not Prime Number");
}