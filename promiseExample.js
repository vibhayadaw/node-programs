/**
 * This file validates the Promise concepts. 
 * Usage is `node promiseExample.js reject` or `node promiseExample.js reject`
 * 
 * This checks how to handle individual promise resolve and reject.
 * Also how to handle action on multiple promises.
 */

const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

const greetingPoster = new Promise((resolve, reject) => {
  console.log('Inside Promise (proof of being eager)');
 
  if(myArgs[0] === 'resolve'){
    resolve('Welcome! Nice to meet you.');
  }
  else{
    reject('Sorry your application is rejected');
  }
});

console.log('Before calling then on Promise');

const promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

greetingPoster.then(res => console.log(`Greeting from promise: ${res}`), rej => console.log(`Rejection from promise: ${rej}`));

Promise.all([greetingPoster, promise3]).then(value => console.log(`all from promise: ${value}`), rejected => console.log(`all from promise: ${rejected}`))