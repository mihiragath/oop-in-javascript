let str = "()[]{}";
function isValid(str) {
  let stack = [];
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char == "(" || char == "[" || char == "{") {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
let result = isValid(str);
console.log(result);
