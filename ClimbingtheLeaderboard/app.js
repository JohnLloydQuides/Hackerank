function climbingLeaderboard(ranked, player) {
    let uniqueRanks = [...new Set(ranked)];
    let result = [];
    let i = uniqueRanks.length - 1;

    for (let score of player) {
        while (i >= 0 && score >= uniqueRanks[i]) {
            i--;
        }
        result.push(i + 2); // Rank is 1-based, so add 2
    }

    return result;
}
