/**
 * Find the Minimum length Unsorted Subarray, sorting which makes the complete array sorted
 * Given an unsorted array arr[0..n-1] of size n, find the minimum length subarray arr[s..e] 
 * such that sorting this subarray makes the whole array sorted.
 * 
 * Examples:
 * 1) If the input array is [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60], 
 * your program should be able to find that the subarray lies between the indexes 3 and 8.
 * 
 * 2) If the input array is [0, 1, 15, 25, 6, 7, 30, 40, 50], 
 * your program should be able to find that the subarray lies between the indexes 2 and 5.
 */

 const getUnsortedIndexes = function (arr) {
   const indexes = {};
   let min, max;
   let indexCount = 0;
   const len = arr.length
   for(let i=1; ( ( indexCount < 2 ) && ( i < len ) ); i++){
     if(!indexes.hasOwnProperty('startIndex') && arr[i]< arr[i-1]){
       // if ith element is less than i-1 then that is not sorted
       indexes.startIndex = i-1;
       indexCount = indexCount+1
     }
     if(!indexes.hasOwnProperty('endIndex') && arr[len-i-1]> arr[len -i]){
      indexes.endIndex = len-i+1;
      indexCount = indexCount+1
     }
   }

   //Now lets check if this array is valid
   max = arr[indexes['startIndex']];
   min = arr[indexes.endIndex]
   for(let i = indexes.startIndex + 1; i <= indexes.endIndex; i++) 
      { 
        if(arr[i] > max) 
          max = arr[i]; 
        if(arr[i] < min) 
          min = arr[i]; 
      } 
        
      // step 2(b) of above algo 
      for(let i = 0; i < indexes.startIndex; i++) 
      { 
        if(arr[i] > min) 
        {   
          indexes.startIndex = i; 
          break; 
        }       
      }  
        
      // step 2(c) of above algo 
      for(let i = len-1; i >= indexes.endIndex+1; i--) 
      { 
        if(arr[i] < max) 
        { 
          indexes.endIndex = i; 
          break; 
        }  
      }   

   if(indexCount === 2){
     return indexes
   }


   return -1
 }

console.log(getUnsortedIndexes([10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60]));
console.log(getUnsortedIndexes([0, 1, 15, 25, 6, 7, 30, 40, 50]))