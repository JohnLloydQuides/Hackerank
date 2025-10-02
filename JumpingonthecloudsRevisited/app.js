function jumpingOnClouds(c, k) {
    let energy = 100;
    let position = 0;

    do {
        position = (position + k) % c.length;
        energy -= 1 + (c[position] === 1 ? 2 : 0);
    } while (position !== 0);

    return energy;
}
