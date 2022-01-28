function plusMinus(arr) {
    // Write your code here
    // let arr = [1,1,0,-1,-1]
    // number of elements: n = 5
    // positive numbers are 2 => ration = 2/5
    // negative numbers are 2 => ration = 2/5
    // zeros are 1 => ration = 1/5
     let numberOfPositiveNumbers = 0;
     let numberOfNegativeNumbers = 0;
     let numberOfZeros = 0;
     
    let rationPositive = 0;
    let rationNegative = 0;
    let rationZero = 0
    let size = arr.length;
    
    arr.forEach((num)=> {
        if (num > 0) {
           numberOfPositiveNumbers += 1 
    }
    else if (num < 0) {
        numberOfNegativeNumbers += 1
    }
    else {
        numberOfZeros += 1
    }})
    rationPositive = (numberOfPositiveNumbers / size) ;
    rationNegative = (numberOfNegativeNumbers / size) ;
    rationZero = (numberOfZeros / size) ;
    console.log(rationPositive.toFixed(6));
    console.log(rationNegative.toFixed(6));
    console.log(rationZero.toFixed(6));
}