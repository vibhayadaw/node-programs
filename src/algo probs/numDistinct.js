 function numDistinct (A, B){
        
  const aSet = new Set(A);
  const bSet = new Set(B);
  console.log(aSet)
  console.log(bSet)
  let count = 0
  
  
  // if A ! = B
  // remove all elements that are not present in B.
  for(let i=0; i< aSet.size; i++){
      if(!aSet.has(bSet[i])){
          let newA = A.split(bSet[i]).join('')
          console.log(newA)
          count = count + (A.length-newA.length)
      }
  }
  // now iterate over 
  return count
}

console.log(numDistinct('abc', 'abc'));
console.log(numDistinct('rabbbit','rabbit'))
console.log(numDistinct('rabbwwwbit','rabbit'))