function isValidSubsequence(array, sequence) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === sequence[sequence.length - 1]) {
            sequence.pop()
        }
    }
    return sequence.length === 0
}