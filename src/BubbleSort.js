const arr = [5,7,4,2,3,79];



function bubbleSort(data){
  let arr = [...data];
  for(let i = 0; i<arr.length-1; i++){
    for(let j = 0; j<arr.length-1-i; j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
      }
    }
  }
  return arr;
}


function bubbleSort2(data,op){
  let arr = [...data];
  for(let i = 0; i<arr.length-1; i++){
    for(let j = 0; j<arr.length-1-i; j++){
       if(op(arr[j],arr[j+1])){
         [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
       }
    }
  }
  return arr;
}


const answer = bubbleSort2(arr,(l,r)=>l<r);
console.log(answer)



