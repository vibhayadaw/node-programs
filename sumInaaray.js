//arr=[1,2,5,7,9]
//target=9

//output=[1,5]

function sum( arr, t){
  const len = arr.len;
  const output = [];
  for(let i=0; i< len; i++){
      if (arr.includes(t-arr[i])) { 
          output.push(arr[i]);
          output.push(t-arr[i])
          break;
      }
  }
  //
  return output;
}

function secondMax (arr){
  const max = arr[0];
  const max2 = arr[0];
  const len = arr.len;
  for( let i=1; i < len; i++){
      if(a[i] > max){
          max2 = max;
          max = a[i];
      }
  }
  return max2;   
}
