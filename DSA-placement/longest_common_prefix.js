let s = ["flower", "flow", "flight"];
let prefix = s[0];
for (let i = 0; i < s.length; i++) {
  for (let j = 0; j < prefix.length; j++) {
    while (prefix.length > 0 && !s[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
  }
  if (prefix.length === 0) {
    console.log(" ");
  }
}
console.log(prefix);
