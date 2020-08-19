// let f;

// if(true){
//   let i=1;
//   f = () =>{
//     console.log(i)
//   }
// }
// console.dir(f);
// f();
/**exampple 2 */

// let f = () =>{
//   let i=1;
//   let j=2;
//   return () => {
//     console.log(i)
//   }
// };

// console.dir(f());

/**example 3 
 * let has block scope so it will run fine
*/

// for(let i=0; i<3;i++){
//   setTimeout(() =>{
//     console.log(i);
//   },1000)
// }

// console.log('after the loop');

/**example 4
 * now var has function scope
 */

// for(var i=0; i<3;i++){
//   setTimeout(() =>{
//     console.log(i);
//   },1000)
// }

// console.log('after the loop')

/**example 5 
 * fixing above problem with iife(immediat)
 */

for (var i = 0; i < 3; i++) {
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i);
}

console.log('after the loop')