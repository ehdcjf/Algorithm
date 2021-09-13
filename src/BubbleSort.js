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