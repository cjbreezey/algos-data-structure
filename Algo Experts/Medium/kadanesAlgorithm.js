// write a function that takes in a non-empty array of integers and returns the 
// maximum sum that can be obtained by summing up all of the integers in a non-empty
// subarray of the input array. A subarray must only contain adjacent numbers

array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
function kadanesAlgorithm(array) {
    let maxSum = array[0];
    let currentSum = 0;
    for (let num of array) {
        if (currentSum + num > num) {
            currentSum = currentSum + num
        } else {
            currentSum = num
        }
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
}
kadanesAlgorithm(array)