// ALGO EXPERT SMALLEST DIFFERENCE PROBLEM
// o(n log n + m log m) time complexity, where n is the length of arrayOne and m is the length of arrayTwo
// o(1) space

function smallestDifference(arrayOne, arrayTwo) {
    let idxOne = 0;
    let idxTwo = 0;
    let smallest = Infinity;
    let final;

    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
        let numOne = arrayOne[idxOne];
        let numTwo = arrayTwo[idxTwo];
        let current = Math.abs(numOne - numTwo)
        idxTwo++

        if (current < smallest) {
            smallest = current;
            final = [numOne, numTwo]
        }
        
        if (idxTwo === arrayTwo.length) {
            idxTwo = 0
            idxOne++
        }

    }

    return final
}

arrayOne = [-1,5,10,20,3]
arrayTwo = [26,134,135, 15,17]

smallestDifference(arrayOne, arrayTwo)

