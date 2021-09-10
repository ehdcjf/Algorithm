const fs = require('fs');
const [n, ...arr] = fs.readFileSync("./dev/stdin").toString().trim().split("\r\n");


const wines = arr.map(v=>+v);



//앞에 먹음          0  100  300   201  103  306  704
// 앞에 안먹음       0  100  200   101  302  205  702
// 앞에 앞에도안먹음  0  100  200   1    102  304  601

let Max = wines[0];
let drink = [[0,0,0],[0,0,0],[wines[0],wines[0],wines[0]]]
for(let i = 3; i<=wines.length+1; i++){
    drink.push([]);
    // 이전 와인 마셨을 때: 한칸 앞에서. 그 전에 마신 경우 제외 -> 3번연속 마심.
    drink[i][0] = Math.max(drink[i-1][1],drink[i-1][2])+wines[i-2];

    // 이전 와인 안마셨을 때: 두 칸 앞에서 제일 많이 마실 수 있었던 경우를 더함.
    drink[i][1] = Math.max(...drink[i-2])+wines[i-2];
    // 앞에 두번 다 안 마셨을 때. 3칸 앞에서 제일 많이 마실 수 있었던 경우를 더함.
    drink[i][2] = Math.max(...drink[i-3])+wines[i-2];
    const tempMax = Math.max(...drink[i]);
    if(tempMax>Max) Max = tempMax
}

// drink.forEach(v=>{
//     console.log(v);
// })

console.log(Max)

