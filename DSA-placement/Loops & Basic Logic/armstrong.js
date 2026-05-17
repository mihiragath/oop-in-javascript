let n = 153;

let temp = n;
let sum = 0;
let digits = n.toString().length;

while (temp > 0) {
  let rem = temp % 10;

  sum += rem ** digits;

  temp = Math.floor(temp / 10);
}

if (sum === n) {
  console.log("Armstrong Number");
} else {
  console.log("Not Armstrong Number");
}

//recursion
let n = 153;
let digits = n.toString().length;

function armstrong(num) {
  if (num === 0) {
    return 0;
  }

  let rem = num % 10;

  return rem ** digits + armstrong(Math.floor(num / 10));
}

let result = armstrong(n);

if (result === n) {
  console.log("Armstrong Number");
} else {
  console.log("Not Armstrong Number");
}

//1³ + 5³ + 3³
//= 1 + 125 + 27
//= 153