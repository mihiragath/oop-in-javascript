function sumOfAllDigits(num) {
  if (num === 0) {
    return 0;
  }
  return (num % 10) + sumOfAllDigits(Math.floor(num / 10));
}

let n = 12345;
let result = sumOfAllDigits(n);
console.log(result);
