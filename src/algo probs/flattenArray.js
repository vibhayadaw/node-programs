// Flattening an array. Ex: Input : [[1, 2, 3], 4, [5, [6, 7]] Output: [1, 2, 3, 4, 5, 6, 7].

const flatten = arr => {
  const len = arr.length;
  const final =[]
  for( let i =0; i< len; i++){
    if(Array.isArray(arr[i])){
      //then pass to flatten again
      final.push(...flatten(arr[i]))
    }
    else{
     final.push(arr[i])
    }
  }
  return final
}

// error
// const flattenReduce2 = (arr) => arr.reduce((agg, item )=>Array.isArray(item)? agg.push( ...flattenReduce(item)): agg.push(item),[])

const flattenReduce = (arr) => arr.reduce((agg, item )=>Array.isArray(item)? [...agg, ...flattenReduce(item)]: [...agg,item],[])
// var flat = (arr)=>arr.reduce((r,a)=>Array.isArray(a)?[...r,...flat(a)]:[...r,a],[]);

console.log(flatten([[1, 2, 3], 4, [5, [6, 7]]]));
console.log(flattenReduce2([[1, 2, 3], 4, [5, [6, 7]]]));