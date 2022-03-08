// let name1 = {
//   firstname: "Vibha",
//   lastname: "Singh",
//   printFullName: function () {
//     console.log(this.firstname + " " + this.lastname)
//   }
// }
// name1.printFullName();

// let name5 = {
//   firstname: "Sachin",
//   lastname: "Tendulakar"
// }

// //function borrowing : Call function of one object to other object
// name1.printFullName.call(name5);

// But ins 

let name3 = {
  firstname: "Vibha",
  lastname: "Singh",
}

let printFullName = function (hometown, state) {
  console.log(this.firstname + " " + this.lastname + " from "+ hometown + ","+ state)
}
// printFullName(name, "Kanpur");
//or 
printFullName.call(name3, "Kanpur", "UP");

let name2 = {
  firstname: "Sachin",
  lastname: "Tendulakar"
}

printFullName.call(name2, "Mumbai", "Maharastra");

//Difference between call and apply is how we pass arguments
// in apply second argument is the list of arguments

printFullName.apply(name2, ["Mumbai", "Maharastra"]);

//bind gives u a copy which could be invoked later

let printNameDetails = printFullName.bind(name3, "Mumbai", "Maharastra");
console.log(printNameDetails);
printNameDetails();