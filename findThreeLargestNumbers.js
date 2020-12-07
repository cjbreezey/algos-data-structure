function findThreeLargestNumbers(array) { //[141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
    let smallest = -Infinity;
    let medium = -Infinity;
    let largest = -Infinity;
    //[17, 18, 141]
    for (let num of array) {
        if (largest < num) {
            smallest = medium
            medium = largest
            largest = num
        } else if (num <= largest && num > medium) {
            smallest = medium;
            medium = num;
        } else if (num <= medium && num > smallest) {
            smallest = num;
        } else {
            continue
        }
    }
    return [smallest, medium, largest]
}