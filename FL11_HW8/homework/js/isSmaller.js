function isBigger(a, b){
    return a > b;
}

function isSmaller(a, b){
    return (a !== b) && isBigger(b, a);
}

isSmaller(2,1);