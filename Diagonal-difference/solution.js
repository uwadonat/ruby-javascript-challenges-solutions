function diagonalDifference(arr) {
    // Write your code here
    //left-to-right: (0,0),(1,1),(2,2) => (i==j)
    // right-to-left: (0,2),(1,1),(2,0) => ()
    
    let left_to_right = 0;
    let right_to_left = 0;
    let diff = 0;

    
    let length = arr.length;
    
     for (let i = 0; i < length; i++ ) {
         for ( let j=0; j< length; j++) {
             if (i == j) {
                 left_to_right += arr[i][j]
             }
         }
     }
     let j = 2;
     
     for (let i=0; i< length; i++) {
         while ( j >= 0) {
             
             right_to_left += arr[i][j] 
             --j;
         }
         
        
     }
     diff = left_to_right - right_to_left
     let result = Math.abs(diff);
     return diff;
}
