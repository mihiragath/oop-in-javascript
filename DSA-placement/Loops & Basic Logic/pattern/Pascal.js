let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  let number = 1;

  for (let j = 0; j <= i; j++) {
    row += number + " ";

    number = (number * (i - j)) / (j + 1);
  }

  console.log(row);
}

//another way
// let num = 5;
// let result = [];
// for (let i = 0; i < num; i++) {
//   let row = new Array(i + 1).fill(1);
//   for (let j = 1; j < i; j++) {
//     row[j] = result[i - 1][j - 1] + result[i - 1][j];
//   }
//   result.push(row);
// }

// console.log(result);
