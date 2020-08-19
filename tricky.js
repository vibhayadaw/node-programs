console.log(2+'2');
console.log(2-'2');

let nums = [1,2,2,3];

console.log(new Set(nums)); //Set { 1, 2, 3 }

console.log([...new Set(nums)]); //[ 1, 2, 3 ]

//convert var to behave like let by iife

// let func = function(){
//   {
//     let l = 'let';
//     var v = 'var'
//   }

//   console.log(v)
//   console.log(l);
// }
// func();

// let func = function(){
//   {
//     ( function () {
//       let l = 'let';
//       var v = 'var'
//     })();
//   }

//   console.log(v)
//   console.log(l);
// }
// func();

console.log(5<6<7);//true
console.log(7>6>5);//false

// // ==============

// let a= function (){
//   return arguments;
// }

// console.log(a("hi"));

// arrow operator doesn't go well with arguments

// let a= (...n) => {
//   return n;
// }

// console.log(a("hi"));

// Object freeze and seal

// let profile = {
//   name: "vibha"
// };

// console.log(profile)

// profile.age=3;

// console.log(profile)

// lets freeze this

// let profile = {
//   name: "vibha"
// };

// console.log(profile)

// Object.freeze(profile);

// profile.age=3;
// profile.name="anoop"

// console.log(profile)

// now i don't want to add another property but change existing so use "SEAL"

// let profile = {
//   name: "vibha"
// };

// console.log(profile)

// Object.seal(profile);

// profile.age=3;
// profile.name="anoop"

// console.log(profile)

//now add property to profile which should not be changeable

let profile = {
  name: "vibha"
};

console.log(profile)

Object.defineProperty( profile, 'age',{
  value:3,
  writable: false
});

console.log(profile)

profile.age=4;
profile.name="anoop"

console.log(profile)

////
console.log(Math.max())