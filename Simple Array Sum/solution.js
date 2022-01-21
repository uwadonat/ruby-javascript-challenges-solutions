function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    ar.forEach((num) => {
        sum = sum + num
    })
    console.log(sum)
}

simpleArraySum([1,6,10,30,5]);