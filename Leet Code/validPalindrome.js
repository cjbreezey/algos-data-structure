// naive .reverse() method

var isPalindrome = function (s) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let string = ""
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase()
        if (alpha.indexOf(char) >= 0) {
            string += char
        }
    }
    console.log(string)
    return string === string.split('').reverse().join('')
};

// two pointer and regexp approach

var isPalindrome = function (s) {
    const regex = /[^0-9a-z]/gi;
    const cleaned = [...s.toLowerCase().replace(regex, "")];
    let left = 0;
    let right = cleaned.length - 1;
    console.log(cleaned)
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false
        }
        left++
        right--
    }
    return true

};