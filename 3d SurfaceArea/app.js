function surfaceArea(A) {
    let H = A.length; 
    let W = A[0].length; 
    let area = 0;

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            area += 2;
            area += i === 0 ? A[i][j] : Math.max(0, A[i][j] - A[i - 1][j]);
            area += i === H - 1 ? A[i][j] : Math.max(0, A[i][j] - A[i + 1][j]);
            area += j === 0 ? A[i][j] : Math.max(0, A[i][j] - A[i][j - 1]);
            area += j === W - 1 ? A[i][j] : Math.max(0, A[i][j] - A[i][j + 1]);
        }
    }

    return area;
}
