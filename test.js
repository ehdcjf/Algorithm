const fs = require('fs');
const [n, ...arr] = fs.readFileSync("./dev/stdin").toString().trim().split("\r\n");

const originWait = arr[0].split(' ').map(v=>+v);
const newWait = [];
const N = +n;
let cnt = 1;
let success = true;


while(cnt<=N){
        if(newWait[newWait.length-1]==cnt){
            newWait.pop();
            cnt++;
        }else{
            if(originWait.length==0){
                success = false;
                break;
            }else{

                let now = originWait.shift();
                if(now==cnt){
                    cnt++;
                }else{
                    newWait.push(now)
                }
            }
        }

        
    
}


if(success){
    console.log('Nice')
}else{
    console.log('Sad')
}




