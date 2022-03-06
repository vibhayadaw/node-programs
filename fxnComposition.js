//Implement compose method
//=============================
//Input: one more functions
//Output: a single function
//----------------------------
const double = x => x * 2;
const triple = x => x * 3;

const doubleOfTen = double(10); //20
const sixTimesTen = triple(doubleOfTen); //60
// const compose = (...funcs) =>
//   initialArg => funcs.reduce((acc, func) => func(acc), initialArg);
const compose = (...funcs) => {
  console.log(funcs);
  return (initialArg) => {
    console.log(initialArg);
    return funcs.reduce((acc, func) => func(acc), initialArg);
  }
}
  

const sixTimes = compose(double, triple);
console.log(sixTimes(10)) //60

// function compose (f,g) {
//   return (x) => f(g(x))
// }