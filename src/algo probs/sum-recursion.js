//sum(1)(2)(3)(4) ....()

let sum =  function (a){
  return function(b){
    if(b)
      return sum(a+b);
    else
      return a;
  }
}

let sum_optimized = a => b =>  b ? sum_optimized(a+b) : a;

console.log(sum(1)(2)());
console.log(sum(1)(2)(3)(4)());

console.log(sum_optimized(1)(2)());
console.log(sum_optimized(1)(2)(3)(4)());