function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => a - b)
    blueShirtHeights.sort((a, b) => a - b)
    let maxRed = Math.max(...redShirtHeights)
    let maxBlue = Math.max(...blueShirtHeights)
    if (maxRed > maxBlue) {
        for (let i = 0; i < redShirtHeights.length; i++) {
            if (redShirtHeights[i] <= blueShirtHeights[i]) return false;
        }
    } else {
        for (let i = 0; i < blueShirtHeights.length; i++) {
            if (blueShirtHeights[i] <= redShirtHeights[i]) return false;
        }
    }
    return true;
}