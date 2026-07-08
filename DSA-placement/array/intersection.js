let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

let intersect = [...arr1.filter((value) => arr2.includes(value))];
console.log(intersect);

//without spread operator
let intersect = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i])) {
    intersect.push(arr1[i]);
  }
}
console.log(intersect);

//without spread operator and without push method
let intersect = new Array();
for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i])) {
    intersect[intersect.length] = arr1[i];
  }
}
console.log(intersect);
