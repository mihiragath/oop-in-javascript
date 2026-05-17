let s = 'abc xys z';
let result = '';

for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char !== ' ') {
        result += char;
    }
}
console.log(result);
