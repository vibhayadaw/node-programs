// Input: s = “geeks quiz practice code”
// Output: s = “code practice quiz geeks”

const reverse = str => {
  const arr = str.split(' ');
  const len = arr.length;
  for(let i = 0; i<len/2; i++){
    let tmp = arr[len-i];
    arr[len-i] = arr[i];
    arr[i] = tmp;
  }
  return arr.join(' ');
}

console.log(reverse('hello   Vibha!!'));