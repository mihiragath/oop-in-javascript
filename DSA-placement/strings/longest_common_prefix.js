let str = ["fly", "flyrd", "flcy"];
let result = "";

for (let i = 0; i < str[0].length; i++) {
  let ch = str[0][i];
  let match = true;

  for (let j = 1; j < str.length; j++) {
    if (i >= str[j].length || ch !== str[j][i]) {
      match = false;
      break;
    }
  }

  if (!match) {
    break;
  }

  result += ch;
}

console.log(result);
