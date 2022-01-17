function solution(a, l, r) {
    let b = [];
    let innerArray=[];
    let num = 0;
    for (var i=0; i<a.length;++i) {
    for ( var j=l; j<=r; ++j) {
    num = (i + 1)*j;
    if (a[i] === num) {
    innerArray.push(true)
    }
    else {
    innerArray.push(false)
    }
    }
    if (innerArray.includes(true)) {
    b.push(true)
    } else {
    b.push(false)
    }
    innerArray=[]
    }
    return b
    
    }
    