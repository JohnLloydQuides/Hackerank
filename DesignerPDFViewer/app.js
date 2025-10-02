function designerPdfViewer(h, word) {
    let maxHeight = 0;
    for (let char of word) {
        let index = char.charCodeAt(0) - 97; 
        maxHeight = Math.max(maxHeight, h[index]);
    }
    return maxHeight * word.length;
}
