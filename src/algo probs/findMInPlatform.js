const numberSort = function(a, b){
  return a - b;
}
const findPlatform=(arr,dep)=>{
  let i, j;

  arr.sort(numberSort);
  dep.sort(numberSort);

  console.log(arr);
  console.log(dep);

  let platform = 0;
  let max=platform;
  let station = []
  i=0; j=0;

  while( i<arr.length || j<dep.length ){
    if(arr[i]<dep[j]){
      //then arrived
      platform = platform +1;
      station.push(arr[i]);
      max = max<platform ? platform : max;
      i++;
    }
    else {
      //departure
      platform = platform -1;
      station.push(dep[j]);
      j++;
    }
  }
  console.log(station);
  return max;
}

let a = [900, 940, 950, 1100, 1500, 1800];
let b = [910, 1200, 1120, 1130, 1900, 2000];

console.log(findPlatform(a,b));