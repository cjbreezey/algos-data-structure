// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
//     Example:
// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
// Note: Please solve it without division and in O(n).
// Follow up:
// Could you solve it with constant space complexity ? (The output array does not count as extra space for the purpose of space complexity analysis.)

// brute force o(n^2) time complexity

var productExceptSelf = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (j === i) continue;
            product = product * nums[j]
        }
        result.push(product)
    }
    return result
}

// o(n) time complexity

var productExceptSelf = function (nums) {
    const length = nums.length;
    const answer = Array(length).fill(1);
    const leftp = Array(length).fill(1); // to store all product to the left of i
    const rightp = Array(length).fill(1); // to store all profuct to the right of i
    // so we loop through i, just product the left and right to the i
    for (let i = 1; i < leftp.length; i++) {
        leftp[i] = nums[i - 1] * leftp[i - 1];
    }
    for (let j = rightp.length - 2; j >= 0; j--) {
        rightp[j] = nums[j + 1] * rightp[j + 1];
    }
    for (let i = 0; i < nums.length; i++) {
        answer[i] = leftp[i] * rightp[i];
    }
    return answer;
};