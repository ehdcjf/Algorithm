const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\r\n");


const [n, max] = input[0].trim().split(' ').map(v => +v);
const card = input[1].trim().split(' ').map(v => +v);

let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      let temp = card[i] + card[j] + card[k];
      if (temp <= max) {
        if (temp > answer)
          answer = temp;
      }
    }
  }
}
console.log(answer);


