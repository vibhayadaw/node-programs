const firstNonRepeating = arr =>{
  for (let i=0; i< arr.length; i++){
    if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]))
    {
      return arr[i]
    }
  }
  return '_'
}
console.log(firstNonRepeating('aaabcccdeeef'));
console.log(firstNonRepeating('abcabcabc'))

