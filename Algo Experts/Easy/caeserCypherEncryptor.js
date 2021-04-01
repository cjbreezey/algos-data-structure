function caesarCipherEncryptor(string, key) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    let result = ""
    for (let char of string) {
        let test = alpha.indexOf(char)
        let index = test + key
        if (index >= 26) {
            index = index % 26
            result += alpha[index]
        } else {
            result += alpha[index]
        }
    }
    return result
}