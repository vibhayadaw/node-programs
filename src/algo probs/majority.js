// Given an array of size n, find the majority element. The majority element is the element that appears more than floor(n/2) times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example :

// Input : [2, 1, 2]
// Return  : 2 which occurs 2 times which is greater than 3/2. 

module.exports = { 
  //param A : array of integers
  //return an integer
   majorityElement : function(A){
       const len = A.length;
       
       for (let i=0; i<len; i++){
           let filteredArray = A.filter( val => val === A[i])
           if(filteredArray.length > len/2){
               return A[i]
           }
       }
       return -1
 
   }
 };