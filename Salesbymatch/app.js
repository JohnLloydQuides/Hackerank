function sockMerchant(n, ar) {
    const freq = {};       
    let pairs = 0;         

    for (let sock of ar) {
        freq[sock] = (freq[sock] || 0) + 1;  
    }

    for (let count of Object.values(freq)) {
        pairs += Math.floor(count / 2);   
    }

    return pairs;
}
