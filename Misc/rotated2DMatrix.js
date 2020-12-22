// Rotating a 2D matrix from back to back SWE

// o(1) space, o(n^2) time complexity

const rotate = (matrix) => {
    let length = matrix.length - 1;
    for (let layer = 0; layer < (Math.floor(matrix.length / 2)); layer++) {
        for (let unit = layer; unit < length - layer; unit++) {
            let topLeft = matrix[layer][unit];
            let topRight = matrix[unit][length - layer];
            let bottomRight = matrix[length - layer][length - unit];
            let bottomLeft = matrix[length - unit][layer];
            matrix[layer][unit] = bottomLeft;
            matrix[unit][length - layer] = topLeft;
            matrix[length - layer][length - unit] = topRight;
            matrix[length - unit][layer] = bottomRight;
        }
    }
    return matrix
}

// Rotating a 2D Matrix
// Given a two-dimensional square matrix (n x n), rotate the matrix 90 degrees to the right (clockwise). 
// Example 1:
// Input:
// [
//   [ 1,  2,  3, 4],
//   [ 5,  6,  7, 8],
//   [ 9, 10, 11, 12],
//   [13, 14, 15, 16]
// ],
// Output:
// [
//  [13,  9, 5, 1],
//  [14, 10, 6, 2],
//  [15, 11, 7, 3],
//  [16, 12, 8, 4]
// ]
// Example 2:
// Input:
// [
//   [10, 20],
//   [30, 40]
// ],
// Output:
// [
//  [30, 10],
//  [40, 20]
// ]]