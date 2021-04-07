// udemy capitalization problem
// o(n) time where n is the length of the string
// o(n) space where n is the length of the string

function capitalize(str) {
    let result = [];
    for (let word of str.split(' ')) {
        result.push(word[0].toUpperCase() + word.slice(1))
    }
    return result.join(' ')
}