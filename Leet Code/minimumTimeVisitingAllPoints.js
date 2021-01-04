// Minimum time visiting all points Leetcode Easy
// On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.
// You can move according to these rules:
// In 1 second, you can either:
// move vertically by one unit,
//     move horizontally by one unit, or
// move diagonally sqrt(2) units(in other words, move one unit vertically then one unit horizontally in 1 second).
// You have to visit the points in the same order as they appear in the array.
// You are allowed to pass through points that appear later in the order, but these do not count as visits.
//     Example 1:
// Input: points = [[1, 1], [3, 4], [-1, 0]]
// Output: 7
// Explanation: One optimal path is[1, 1] -> [2, 2] -> [3, 3] -> [3, 4] -> [2, 3] -> [1, 2] -> [0, 1] -> [-1, 0]
// Time from[1, 1] to[3, 4] = 3 seconds
// Time from[3, 4] to[-1, 0] = 4 seconds
// Total time = 7 seconds
// Example 2:
// Input: points = [[3, 2], [-2, 2]]
// Output: 5

var minTimeToVisitAllPoints = function (points) { // [[1,1], [3,4], [-1,0]]
    if (points.length < 2) return 0;
    let time = 0;
    for (let i = 1; i < points.length; i++) {
        // Calculate the distances between current point and previous point for each axis
        const x = Math.abs(points[i - 1][0] - points[i][0]);
        const y = Math.abs(points[i - 1][1] - points[i][1]);
        // For each distance the time will be the max value between X and Y
        // So we can get the total time by plus the max value of each distance
        time += Math.max(x, y);
    }
    return time;
};