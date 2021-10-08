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



function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp
}

function bubbleSort(arr) {
  let tempArr = [...arr]
  for (let outer = tempArr.length; outer >= 2; outer--) {
    for (let inner = 0; inner < outer; inner++) {
      if (tempArr[inner] > tempArr[inner + 1]) {
        swap(tempArr, inner, inner + 1)
      }
    }
  }
  return tempArr;
}


let test = [5, 4, 2, 3, 1];
console.log(bubbleSort(test));
console.log(test);
