const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");
console.log(input)
const [A, B] = input.map(v => BigInt(v));
console.log(A)
console.log(B)
console.log(A + B)
console.log((A + B).toString())