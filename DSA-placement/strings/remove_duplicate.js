//Remove Duplicate Characters (Preserve Order)
let str = "programming";
let uniqueChars = "";

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (uniqueChars.indexOf(char) === -1) {
        uniqueChars += char;
    }
}
console.log(uniqueChars);                                                   

//without using indexOf method
let uniqueChars1 = "";
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let isDuplicate = false;
    for (let j = 0; j < uniqueChars1.length; j++) {
        if (uniqueChars1[j] === char) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        uniqueChars1 += char;
    }
}
console.log(uniqueChars1);