const counterLoopIndex = (arr, startIndex) =>{

  let index =  startIndex;
  let length = 0;

  let travesedIndex = []

  while(travesedIndex.indexOf(index) === -1){
    if (startIndex === -1){
      return -1;
    }

    if(index > arr.length){
      return -1;
    }
    
    travesedIndex.push(index);
    index = arr[index];
    length = length + 1;
  }
  return length;
}

console.log(counterLoopIndex([1,0],0)); // Prints 1
console.log(counterLoopIndex([1,2,0],0)); // Prints 2
console.log(counterLoopIndex([1,3,0,2],0)); // Prints 3
console.log(counterLoopIndex([1,1],0)) // Prints 2
console.log(counterLoopIndex([7,0],0)) // Prints -1
console.log(counterLoopIndex([1,2,0],-1)); // Prints -1