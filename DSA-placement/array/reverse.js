let a = [5, 4, 3, 2, 1];

for (let i = 0; i < a.length / 2; i++) {
  let temp = a[i];
  a[i] = a[a.length - 1 - i];
  a[a.length - 1 - i] = temp;
}
console.log(a);
