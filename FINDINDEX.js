// Question 1

// Input : Array 1 - 2 3 6 7 9
//         Array 2 - 1 4 8 10

//                 k = 5
// Output : 6



const findIndex = (a ,b, k) => {
    const lena = a.length;
    const lenb = b.length;
    const final = [];
    let ai=0, bi=0;
    
    // if k > lena +lenb
    if( k > (lena +lenb)){
        return null;
    }
    
    //first check if first element of b is greater than last element of a
    
    //check if first element of a is greater than last element of b
    
    //merge the 
    
    while( ai < lena && bi< lenb){
        if(a[ai]<b[bi]){
            ai = ai+1;
            if( k === (ai + bi)){
                return a[ai-1]
            }
        }
        else{
            bi = bi +1;
            if( k === (ai + bi)){
                return b[bi-1]
            }
        }
    }  
    if( ai === lena){
    //array a is finished
        return b[k-1-lena]
    }
    else {
        return a[k-1-lenb]
    }
}

console.log(findIndex([2, 3, 6, 7, 9], [1, 4, 8, 10], 5))
// Array.prototype.push = function (item){
//    var arr = this;
//    var len = arr.length;
//    for(var i = 0; i< length; i++){
//        f
//    }
   
// }