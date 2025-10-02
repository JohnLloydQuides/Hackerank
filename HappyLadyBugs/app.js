function happyLadybugs(b) {
    const freq = {};
    let hasEmptySpace = false;

    for (const char of b) {
        if (char === '_') {
            hasEmptySpace = true;
        } else {
            freq[char] = (freq[char] || 0) + 1;
        }
    }

    for (const char in freq) {
        if (freq[char] < 2) {
            return "NO";
        }
    }

    if (!hasEmptySpace) {
        for (let i = 1; i < b.length - 1; i++) {
            if (b[i] !== b[i - 1] && b[i] !== b[i + 1]) {
                return "NO";
            }
        }
    }

    return "YES";
}
