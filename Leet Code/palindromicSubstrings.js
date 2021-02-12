// Given a string, your task is to count how many palindromic substrings in this string.
// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
//     Example 1:
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
//     Example 2:
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
//     Note:
// The input string length won't exceed 1000.

// brute force o(n^3)

var countSubstrings = function (s) {
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            let substring = s.slice(i, j)
            if (substring === substring.split('').reverse().join('')) counter++
        }
    }
    return counter
};