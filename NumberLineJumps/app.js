function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
        return x1 === x2 ? "YES" : "NO";
    }

    const steps = (x2 - x1) / (v1 - v2);
    return steps >= 0 && Number.isInteger(steps) ? "YES" : "NO";
}
