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