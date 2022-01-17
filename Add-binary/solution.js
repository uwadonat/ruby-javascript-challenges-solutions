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
           for (n=0;n<diff1;++n){
               x.unshift("0");
           }
       }
          
       
       for ( var i=length -1; i >=0; --i) {
           let temp = 0;
           let sum =0;
           if ((x[i] && y[i]) === "0") {
               sum = "0"
           } else if ((x[i] && y[i]) === "1") {
               sum = "0"
               temp= "1"
           }else {
               sum = "1"
           }
           
           result.unshift(sum)
           
           
       }
           
       return result
       
    };
    