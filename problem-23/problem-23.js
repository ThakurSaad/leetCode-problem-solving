var addBinary = function(a, b) {
    let sum = 0

    if (a.length < 53 && b.length < 53) {
        sum = parseInt(a, 2) + parseInt (b, 2);
        sum = sum.toString(2);
    } else {
        sum = BigInt("0b" + a) + BigInt("0b" + b);
        sum = sum.toString(2);
    }
    
    return sum;
};