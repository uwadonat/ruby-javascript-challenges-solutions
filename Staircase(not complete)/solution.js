function staircase(n) {
    // Write your code here
    let result = [];
    let x = 0;
    let limit = n -1;
    for ( let i = 0; i <= limit; i++) {
        for (let j=0; j <= limit; j++) {
            if ( j >= limit - i) {
                x = "#";
            }
            else {
                x= "O";
            }
            
        }
        result.push(x);
    }
     for ( let i = 0; i <= limit; i++) {
        for (let j=0; j <= limit; j++) {
            console.log(result[i][j]);
           }
        }

}