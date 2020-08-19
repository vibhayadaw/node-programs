/* <html>
	<head>
  <!--<link>-->
  <!--<meta/>
  <script src-"index.js" async>
  </head>
  <body>
  content goes here
  <script/>
  </body>
</html>

body {

} */


//Question 1
var myVar = 'foo';
(function() {  
  console.log('Original value was: ' + myVar);   //
  var myVar = 'bar';  
  console.log('New value is: ' + myVar); //
})();
// Original value was: foo
// New value is: bar

//Question 2
var myVar = 'foo';
console.log(ghj);
function abc() {  
  console.log('Original value was: ' + myVar);   //
  var myVar = 'bar';
  var ghj = "hello";
  console.log('New value is: ' + myVar); //
}
abc();

// Original value was: foo
// New value is: bar

function closureContext (){
  var i;
  for(i = 0; i< 10; i++){
    setTimeout(((i_local)=>()=>console.log(i_local))(i),100);
  }
}
closureContext()

// ------------------
function hello(){
  console.log('a');
  setTimeout( () => console.log('B')
  , 0);
  waitForNSecs(3);
  console.log('C');
}
hello();
function waitForNSecs(sec){
  var start = Date.now(), now = start;
  while (now - start < (sec*1000)) {
    now = Date.now();
  }
}


var Person = {
  name: 'John'
}
var p1 = Object.create(Person);
delete p1.name
console.log(p1.name);


// We    are   in an   interview => weArenAnInterview
//   input - sentence
//   output - camelcase 

let transformCamel = input =>{
  let arr = input.split(' ')
  console.log(arr)
  for( let i=1; i<arr.length; i++)
  {
  	arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  output=arr.join('');
  return output
}

console.log(transformCamel('we    are   in an   interview'))

 
//   for( let i=0; i<arrlength; i++)
//   {
//   	arr[i][0] = arr[i][0].toUppercase();
//   }
//   output=arr.join('');