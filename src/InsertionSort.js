function insertionSort(data){
  let arr = [...data]
  for(let i = 1; i<arr.length; i++){
    let current = i;
    
    while(arr[current-1]>arr[current] && current>0){
      [arr[current-1],arr[current]] = [arr[current],arr[current-1]];
      current--;
    }
  }
  console.log(arr)
}


function insertionSort(arr){
  for(let i = 1; i<arr.length; i++){
    let sortingElem = arr[i];

    let insertedIndex = i-1;
    while(
      insertedIndex > 0 &&
      arr[insertedIndex]> sortingElem
    ){
      arr[insertedIndex+1] = arr[insertedIndex]; 
      -- insertedIndex; 
    }
    arr[insertedIndex+1] = sortingElem;
  }
  console.log(arr)
}
