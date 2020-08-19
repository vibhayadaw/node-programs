// Sample API
// const p = Product(
//   { 
//       Apparel: {
//           Men: {
//               Shirts: {
//               }
//           },
//           Women: {
//           }
//       }
//   }
// );


// p
// .add(() => Promise.resolve(
//   {
//        Electronics: {
//           Computers: {
//           }
//       },
//       Toys: {}
//  }
// ))
// .remove(() => Promise.resolve('Toys'));
// .print()

//========O/P======================
// should print the complete data in JSON, you can ignore indentations and spaces.
// {
//   "Apparel" : {
//       "Men": {
//           "Shirts": {
//           }
//       },
//       "Women": {
//       }
//   },
//   "Electronics": {
//       "Computers": {
//       }
//   }
// }

// Another Example 
// const p = Product(
//   { 
//       "A": {
//           "1": {
              
//           },
//           "2": {
//           }
//       }
//   }
// );

// p
// .add(() => Promise.resolve(
//   {
//        "B": {
//           "3": {
//           }
//       },
//       "C": {}
//  }
// ))
// .remove(() => Promise.resolve('B'));
// .print()

// //========O/P======================
// // should print the complete data in JSON, you can ignore indentations and spaces.
// {
//   "A": {
//       "1": {
//       },
//       "2": {
//       }
//   },
//   "C": {
    
//   }
// }
  
// Q: Implement the "Product" function.

// code here...

function Product(inventory){
  this.inventory = new Object(inventory);
  return this;
}

Product.prototype.add = function( cb){
  this.addPromise = cb();
  p.then(data=>{
    this.inventory = { ...this.inventory, data}
  }) ;
}

Product.prototype.remove = function( cb){
  this.removePromise = cb();
  this.addPromise.then(removePromise.then(data=>{
    delete this.inventory[data]
  })) ;
}

Product.prototype.print = function (){
  console.log(this.inventory)
}