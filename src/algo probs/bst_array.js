const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs[0]);

find = parseInt(myArgs[0]);

arr = [1,3,4,5,6];
start = 0;
found = -1;
end = arr.length -1;


while (start !== end+1){
  mid = parseInt((start + end)/2);
  if(arr[mid] === find){
    //found
    found = mid
    console.log(mid);
    break;
  }
  else if(arr[mid]<find){
    //look right
    console.log('look right')
    start = mid+1;
  }
  else {
    //look right
    console.log('look left')
    end = mid-1;
  }
}
if (found === -1){
  console.log('element not found');
}