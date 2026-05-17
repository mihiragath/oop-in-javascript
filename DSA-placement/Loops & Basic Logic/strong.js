let n = 145;

let temp = n;
let sum = 0;

while (temp > 0) {
  let rem = temp % 10;

  let fact = 1;

  for (let i = 1; i <= rem; i++) {
    fact *= i;
  }

  sum += fact;

  temp = Math.floor(temp / 10);
}

if (sum === n) {
  console.log("Strong Number");
} else {
  console.log("Not Strong Number");
}

//using recursion
let n = 145;

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

function strong(num) {
  if (num === 0) {
    return 0;
  }

  let rem = num % 10;

  return factorial(rem) + strong(Math.floor(num / 10));
}

let result = strong(n);

if (result === n) {
  console.log("Strong Number");
} else {
  console.log("Not Strong Number");
}

// 1! + 4! + 5!
// = 1 + 24 + 120
// = 145
