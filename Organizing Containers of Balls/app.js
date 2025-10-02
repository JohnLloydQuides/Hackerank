function organizingContainers(container) {
    const n = container.length;
    const containerCapacity = Array(n).fill(0);
    const typeTotal = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            containerCapacity[i] += container[i][j]; 
            typeTotal[j] += container[i][j];         
        }
    }

    containerCapacity.sort((a, b) => a - b);
    typeTotal.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (containerCapacity[i] !== typeTotal[i]) {
            return "Impossible";
        }
    }

    return "Possible";
}
