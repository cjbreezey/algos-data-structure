// ALGO EXPERTS nth Fibonacci problem

// o(2^n) or o(n)???? time complexity, 0(n) space complexity

function getNthFib(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    let newFib = getNthFib(n - 1) + getNthFib(n - 2);
    return newFib;
}

// o(n) time, o(1) space

function getNthFib(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while (counter <= n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}
// Do not edit the line below.
exports.getNthFib = getNthFib;