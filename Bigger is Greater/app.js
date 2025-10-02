function biggerIsGreater(w) {
    let arr = w.split('');
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }
    if (i === -1) {
        return "no answer";
    }
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
    let suffix = arr.slice(i + 1).reverse();
    let result = arr.slice(0, i + 1).concat(suffix).join('');
    return result;
}