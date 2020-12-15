// coding score report percent from codeSignal coding challenge

scores = [350, 725, 730, 845]
function codingScoreReportPercent(scores) {
    scores.sort(function (a, b) { return b - a })
    let finalScores = [];
    let scoresHash = {};
    scores.forEach(score => {
        if (score >= 300 && score < 600) {
            scoresHash['Poor'] = (scoresHash['Poor'] || 0) + 1
        } else if (score >= 600 && score < 700) {
            scoresHash['Fair'] = (scoresHash['Fair'] || 0) + 1
        } else if (score >= 700 && score < 750) {
            scoresHash['Good'] = (scoresHash['Good'] || 0) + 1
        } else if (score >= 750 && score < 800) {
            scoresHash['Excellent'] = (scoresHash['Excellent'] || 0) + 1
        } else {
            scoresHash['Elite'] = (scoresHash['Elite'] || 0) + 1
        }
    })
    let sortable = [];
    for (var value in scoresHash) {
        sortable.push([value, scoresHash[value]])
    }
    sortable.sort(function (a, b) {
        return b[1] - a[1]
    })
    for (let i = 0; i < sortable.length; i++) {
        finalScores.push(sortable[i][0] + ': ' + ((sortable[i][1] / scores.length) * 100).toFixed(2) + '%')
    }
    return finalScores
}
codingScoreReportPercent(scores)