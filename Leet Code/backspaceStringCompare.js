// Given two strings S and T, return if they are equal when both are typed into empty text editors.# means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.
// Example 1:
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
//     Example 2:
// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
//     Example 3:
// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
//     Example 4:
// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
//     Note:
// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:
// Can you solve it in O(N) time and O(1) space ?

var backspaceCompare = function (S, T) {
    let sResult = [];
    let tResult = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] !== '#') {
            sResult.push(S[i])
        } else {
            sResult.pop()
        }
    }
    for (let j = 0; j < T.length; j++) {
        if (T[j] !== '#') {
            tResult.push(T[j])
        } else {
            tResult.pop()
        }
    }
    let test = tResult.join('')
    let test1 = sResult.join('')
    return (test === test1)
};