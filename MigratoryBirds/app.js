function migratoryBirds(arr) {
    const freq = {};

    for (let bird of arr) {
        freq[bird] = (freq[bird] || 0) + 1;
    }

    let maxCount = 0;
    let minType = Infinity;

    for (let type in freq) {
        const count = freq[type];
        const birdType = parseInt(type, 10);
        if (count > maxCount || (count === maxCount && birdType < minType)) {
            maxCount = count;
            minType = birdType;
        }
    }

    return minType;
}