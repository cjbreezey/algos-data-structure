// Udemy steps problem

function steps(n) {
    let pound = 1 // 3
    // let spaces = n - pound // 0
    while (pound <= n) { // 
        let spaces = n - pound
        if (pound === n) {
            console.log('#'.repeat(pound))
            pound += 1;
        } else {
            console.log('#'.repeat(pound) + 'space'.repeat(spaces))
            pound += 1;
            // spaces -= 1;
        }
    }
}
n = 5
steps(n)