
////======== 완전탐색을 통한 최장 증가 부분 수열 알고리즘 
function lis(arr){
  if(arr.length==0) return 0;
  else{
    let ret = 1;
    for(let i = 0; i<arr.length; i++){
      let next = [];
      for(let j = i+1; j<arr.length; j++){
        if(arr[i]<arr[j]){
          next.push(arr[j]);
        }
      }
      ret = Math.max(ret,1+lis(next));
    }
    return ret;
  }
}

let arr = [1,4,6,8,3,5,6,7];
console.log(lis(arr));






////======== DP를 통한 최장 증가 부분 수열 알고리즘 
function dpLis(arr){
  arr.unshift(-Infinity);
  const N = arr.length;
  let cache = Array(N).fill(-1);

  function find(start){
    if(cache[start]!=-1){
      return cache[start];
    }else{
      let ret = 0;
      for(let next = start+1; next<N; next++){
        if(arr[start]<arr[next]){
          ret = Math.max(ret,find(next)+1);
        }
      }
      cache[start] = ret;
      return ret; 
    }
  }

  return find(0);
}

let arr2 = [1,4,6,8,3,5,6,7];
console.log(dpLis(arr2));



////======== DP를 통한 최장 증가 부분 수열 알고리즘 2
function dpLis2(arr){
  let lis = [];
  for(let i = 0; i<arr.length; i++){
    lis[i] = 1;
    for(let j=0; j<i; j++){
      if(arr[j]<arr[i]){
        lis[i] = Math.max(lis[i],lis[j]+1);
      }
    }
  }
  return Math.max(...lis)
}

let arr4 = [1,4,6,8,3,5,6,7];
console.log(dpLis2(arr4))



////======== 이진탐색을 통한 최장 증가 부분 수열 알고리즘
function bsLis(arr){
  if(arr.length==0){
    return 0; 
  }else{
    let C = Array(arr.length+1).fill(Infinity);
    C[0] = -Infinity;
    C[1] = arr[0];
    let temp_longest = 1;
  

    function search(low,high,n){
      if(low==high){
        return low;
      }else if( low+1 == high){
        return C[low]>=n ? low : high;
      }

      let mid = Math.floor((low+high)/2);
      if(C[mid]==n){
        return mid;
      }else if( C[mid]<n){
        return search(mid+1,high,n);
      }else{
        return search(low,mid,n);
      }
    }


  arr.forEach(v=>{
    if(C[temp_longest]<v){
      temp_longest+=1;
      C[temp_longest] = v 
    }else{
      let next_location = search(0,temp_longest,v);
      C[next_location] = v;
    }

  })
  return temp_longest;
  }

}

let arr3 = [1,4,6,8,3,5,6,7];
console.log(bsLis(arr3));



////======== 이진탐색을 통한 최장 증가 부분 수열 알고리즘2
function bsLis2(arr){
  let lis = [];

  function binarySearch(left,right,target){
    let mid;
    while(left<right){
      mid = Math.floor((left+right)/2);

      if(lis[mid]<target){
        left = mid +1;
      }else{
        right = mid
      }
    }
    return right;
  }

  let N = arr.length;
  let j  = 0;
  lis[0]=arr[0];
  let i =1;

  while(i<N){
    
    if(lis[j]<arr[i]){
      lis[j+1] = arr[i];
      j+=1;
    }else{
      let idx = binarySearch(0,j,arr[i]);
      lis[idx] = arr[i] 
    }
    i+=1;
  }

  return j+1;

}

let arr5 = [1,4,6,8,3,5,6,7];
console.log(bsLis2(arr5));






