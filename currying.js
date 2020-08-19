let multiply = function (x, y) {
  console.log (x * y );
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5)

// another approach is closure

let multiplyClosure = function (x){
  console.log('inside closure',x);
  return function(y){
    console.log(x * y);
  }
}
multiplyClosure (2)(5);


let multiplyClosureByTwo = multiplyClosure(2);
multiplyByTwo(3);

multiplyclosureByThree = multiplyClosure(3);
multiplyByThree(5)
