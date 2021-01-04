// Determine if string halves are alike
// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
// Two strings are alike if they have the same number of vowels('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U').Notice that s contains uppercase and lowercase letters.
// Return true if a and b are alike.Otherwise, return false.
//     Example 1:
// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok".a has 1 vowel and b has 1 vowel.Therefore, they are alike.
//     Example 2:
// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book".a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.
//     Example 3:
// Input: s = "MerryChristmas"
// Output: false
// Example 4:
// Input: s = "AbCdEfGh"
// Output: true

var halvesAreAlike = function (s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let leftVowel = 0;
    let leftConsonant = 0;
    let rightVowel = 0;
    let rightConsonant = 0;
    let mid = Math.floor(s.length / 2)
    let left = s.slice(0, mid)
    let right = s.slice(mid)
    for (let i = 0; i < left.length; i++) {
        if (vowels.includes(left[i])) {
            leftVowel++
        } else {
            leftConsonant++
        }
    }
    for (let j = 0; j < right.length; j++) {
        if (vowels.includes(right[j])) {
            rightVowel++
        } else {
            rightConsonant++
        }
    }
    if (leftVowel == rightVowel && leftConsonant == rightConsonant) {
        return true
    } else
        return false
};