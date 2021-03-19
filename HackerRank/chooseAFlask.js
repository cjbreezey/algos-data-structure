const chooseFlask = (requirements, flaskTypes, markings) => {
    requirements = requirements.sort((a,b) => a - b);
    let minWaste = [Infinity, -1]
    let i = 0;
    let j = 0;
    while (i < flaskTypes) {
        let currWasteSum = 0;
        let reqNum = 0;
        let currFlaskNum = i
        while (reqNum < requirements.length && j < markings.length && markings[j][0] === currFlaskNum) {
            if (requirements[reqNum] > markings[i][j]) {
                j++
            } else {
                currWasteSum += markings[j][i] - requirements[reqNum]
                reqNum++
            }
        }
        i++
        while (j < markings.length && markings[j][0] === currFlaskNum) j++
        if (reqNum !== requirements.length) continue
        if (currWasteSum < minWaste[0]) {
            minWaste[0] = currWasteSum
            minWaste[1] = currFlaskNum
        }
    }
    return minWaste[i]
}