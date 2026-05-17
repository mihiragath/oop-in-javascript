let a = [1,2,3,4,5,6,7,8,9,10];
let target = 5;

for(let i=0; i<a.length; i++){
    if(a[i] === target){
        console.log("Element found at index: " + i);
        break;
    }
}


//using recursion
function linearSearch(arr, target, index = 0) {
    if (index >= arr.length) {
        return -1; // Element not found
    }
    if (arr[index] === target) {
        return index; // Element found at index
    }
    return linearSearch(arr, target, index + 1); // Recursive call with next index
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let target = 5;
let result = linearSearch(arr, target);
if (result !== -1) {
    console.log("Element found at index: " + result);
} else {
    console.log("Element not found");
}