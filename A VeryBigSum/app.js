function aVeryBigSum(ar) {
    let sum = BigInt(0);
    for (let i = 0; i < ar.length; i++) {
        sum += BigInt(ar[i]);
    }
    return sum.toString(); // Convert BigInt to string for output
}