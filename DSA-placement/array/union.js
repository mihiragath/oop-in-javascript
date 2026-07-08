let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

let union = [...arr1, ...arr2];
console.log(union);

//without spread operator 
let union = [];
for (let i = 0; i < arr1.length; i++) {
    union.push(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
    union.push(arr2[i]);
}
console.log(union);

//without spread operator and without push method
let union = new Array(arr1.length + arr2.length);   
for (let i = 0; i < arr1.length; i++) {
    union[i] = arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
    union[arr1.length + i] = arr2[i];
}
console.log(union);

//without spread operator and without push method and without new Array
let union = [];
for (let i = 0; i < arr1.length; i++) {
    union[i] = arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
    union[arr1.length + i] = arr2[i];
}
console.log(union);

