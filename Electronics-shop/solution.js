function getMoneySpent(keyboards, drives, b) {
   
    let max = -1;
    let price = 0;
    for (let i=0; i<=keyboards.length; ++i) {
           for (let j=0; j<=drives.length; ++j) {
             price = keyboards[i] + drives[j];
             if (price <= b) {
                 let deal = price;
                 max = deal > max ? deal : max
             
             }
           }
           
    }
    return max;
 }

