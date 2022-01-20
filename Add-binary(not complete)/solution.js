### Note: this challenge is not complete
========================================
var addBinary = function(a, b) {
    let result=[]
       let x=a.split("")
       let y=b.split("")
       let xLength=x.length
       let yLength=y.length
       let length
       if (xLength > yLength){
           let diff1 = xLength - yLength
           length = xLength;
           for (m=0;m<diff1;++m){
               y.unshift("0");
           }
       }else {
           length=yLength;
           let diff2=yLength - xLength
           for (n=0;n<diff2;++n){
               x.unshift("0");
           }
       }
         
       return x[-1]
       for ( var i=length-1; i>= 0; --i) {
           return 
           let temp = false;
           let sum =0;
           
        if ((x[i] && y[i]) === "1") {
              if(temp) {
                  sum = "1"
              }
            else {
               sum = "0" 
               temp= true 
            }
               
                
           }else if((x[i] ==="1") && (y[i] === "0")){
               if(temp) {
                   sum = 0
                   temp = true
               }
               else {
                  sum = "1" 
               }
               
           }
           else if((x[i]==="0") && (y[i] === "1")) {
                if(temp) {
                   sum = 0
                   temp = true
               }
               else {
                  sum = "1" 
               }
               
           }
           else {
               if(temp) {
                   sum = 1
               }
               else {
                    sum ="0"
               }
              
           }
           
           result.unshift(sum)
           
           
       }
           
       return result;
       
    };
    
    