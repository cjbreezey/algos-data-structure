function generateDocument(characters, document) {
    let hash = {};
    for (let i = 0; i < characters.length; i++) {
        let char = characters[i]
        hash[char] = hash[char] + 1 || 1
    }
    // hello
    // aheaolabbhb
    for (let j = 0; j < document.length; j++) {
        let char = document[j]
        if (!hash[char]) {
            return false
        } else {
            hash[char]--
        }
    }
    return true
}