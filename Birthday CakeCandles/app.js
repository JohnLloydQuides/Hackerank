function birthdayCakeCandles(candles) {
    const max = Math.max(...candles);
    return candles.filter(c => c === max).length;
}