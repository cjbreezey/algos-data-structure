function matrix(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
    }

    // result = [ [1, 2, 3, 4], [12, null, null, 5], [11, null, null, 6], [10, 9, 8, 7] ]

    let counter = 1; // 13
    let startRow = 0; // 1
    let startCol = 0; // 1
    let endRow = n - 1; // 2
    let endCol = n - 1; // 2
    while (startCol <= endCol && startRow <= endRow) {
        // Top Left Row
        for (let i = startCol; i <= endCol; i++) { 
            result[startCol][i] = counter;
            counter++;
        }
        startRow++;
        // Top Right Col
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }
        endCol--;
        // Bottom Left Row
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;
        // Bottom Right Col
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter
            counter++
        }
        startCol++
    }
    return result;
}