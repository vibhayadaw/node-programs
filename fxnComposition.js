//Implement compose method
//=============================
//Input: one more functions
//Output: a single function
//----------------------------
const double = x => x * 2;
const triple = x => x * 3;

const doubleOfTen = double(10); //20
const sixTimesTen = triple(doubleOfTen); //60

const sixTimes = compose(double, triple);
console.log(sixTimes(10)) //60

function compose (f,g) {
  return (x) => f(g(x))
}

// function compose(...args){
//   if(args.length === 1){
//     return (x)=>(args[0](x))
//   }
//   return (x) => args[0]( compose(args[1..]))
// }