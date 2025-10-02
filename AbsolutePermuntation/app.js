function absolutePermutation(n, k) {
    if (k === 0) {
        // Identity permutation
        return Array.from({length: n}, (_, i) => i + 1);
    }
    if (n % (2 * k) !== 0) {
        // Impossible to construct
        return [-1];
    }
    let result = [];
    let add = true;
    for (let i = 1; i <= n; i++) {
        if (add) {
            result.push(i + k);
        } else {
            result.push(i - k);
        }
        if (i % k === 0) add = !add;
    }
    return result;
}