function kaprekarNumbers(p, q) {
    let result = [];

    for (let i = p; i <= q; i++) {
        let sq = (i * i).toString();
        let d = i.toString().length;
        let right = parseInt(sq.slice(-d)) || 0;
        let left = parseInt(sq.slice(0, sq.length - d)) || 0;

        if (left + right === i) {
            result.push(i);
        }
    }

    if (result.length === 0) {
        console.log("INVALID RANGE");
    } else {
        console.log(result.join(' '));
    }
}
