function repeatedString(s, n) {
    const countA = s.split('').filter(c => c === 'a').length;
    const fullRepeats = Math.floor(n / s.length);
    const remainder = n % s.length;
    const extraA = s.slice(0, remainder).split('').filter(c => c === 'a').length;

    return fullRepeats * countA + extraA;
}
