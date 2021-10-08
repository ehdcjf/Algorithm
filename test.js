const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\r\n').map(x=>x.split(' ').map(v=>+v));

const [M,_] = input[0];
const cache =input[1];

function solve0(M,cache){
  const answer = [];
  let memory = new Array(M).fill(0);
  cache.forEach(v=>{
    let find = memory.indexOf(v);
    if(find==-1){
      memory.pop();
    }else{
      memory.splice(find,1);
    }
    memory.unshift(v);
    answer.push(memory.join(' '));
  })
  console.log(answer.join('\n'));
}
  

function solve(M,cache){
  let memory = new Array(M).fill(0);
  cache.forEach(v=>{
    let curr  = null;
    for(let i = 0; i<memory.length; i++){
      if(memory[i]==v){
        curr = i;
        break;
      }
    }

    if(curr==null){
      memory[memory.length-1] = v ;
      curr = memory.length-1;
    }

    while(curr>0){
      [memory[curr-1], memory[curr]] =[memory[curr],memory[curr-1]]; 
      curr--;
    }
     console.log(memory)
  })
  
}

solve0(M,cache);
solve(M,cache);


function solve2(){
  for(let i = 0; i<N; i++){
    let task = Number(prompt('task'));
    let taskIndex = S-1;

    for(let j =0; j<5; j++){
      if(cache[j]==task){
        taskIndex = j;
        break; 
      }
    }

    for(let j =taskIndex; j>0; j--){
      cache[j] = cache[j-1]; 
    }
  
  }
}












