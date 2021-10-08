function selectionSort(data){
  let arr = [...data];

  for(let i = 0; i<arr.length-1; i++){
    let base = i;
    for(let j = i+1; j<arr.length; j++){
      if(arr[base]>arr[j]) base = j;
    }   
    [arr[i],arr[base]]=[arr[base],arr[i]]
  }

  return arr;
}

console.log(selectionSort(arr))


function selectionSort2(data,op){
  let arr = [...data];

  for(let i = 0; i<arr.length-1; i++){
    let base = i;
    for(let j = i+1; j<arr.length; j++){
      if(op(arr[base],arr[j])) base = j;
    }   
    [arr[i],arr[base]]=[arr[base],arr[i]]
  }
  
  return arr;
}

let result = selectionSort2(arr,(l,r)=>l<r);
console.log(result)