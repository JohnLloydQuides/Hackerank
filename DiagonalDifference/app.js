function DiagonalDifference(arr) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n - 1 - i];
    }
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}   