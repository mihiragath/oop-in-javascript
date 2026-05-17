let a = [1, 2, 3, 4, 5];
let max = a[0];
let min = a[0];
let secMax = -Infinity;
let secMin = Infinity;

for (let i = 0; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
  }
  if (a[i] < min) {
    min = a[i];
  }
}

for (let i = 0; i < a.length; i++) {
  if (a[i] > secMax && a[i] < max) {
    secMax = a[i];
  }
  if (a[i] < secMin && a[i] > min) {
    secMin = a[i];
  }
}

console.log("max: ", max);
console.log("min: ", min);
console.log("second max: ", secMax);
console.log("second min: ", secMin);
