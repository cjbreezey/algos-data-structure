// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.



//     Example 1:

// Input: intervals = [[0, 30], [5, 10], [15, 20]]
// Output: 2
// Example 2:

// Input: intervals = [[7, 10], [2, 4]]
// Output: 1

var minMeetingRooms = function (intervals) {
    //     let result = 0;
    //     let start_time = [];
    //     let end_time = [];
    //     for (let i = 0; i < intervals.length; i++) {
    //         start_time.push(intervals[i][0])
    //         end_time.push(intervals[i][1])
    //     }
    //     start_time.sort((a,b) => a - b)
    //     end_time.sort((a,b) => a - b)

    //     let i = 0;
    //     let j = 0;
    //     let meetingRooms = 0;
    //     while (i < start_time.length) {
    //         if (start_time[i] < end_time[j]) {
    //             meetingRooms++
    //             i++
    //         } else {
    //             meetingRooms--
    //             j++
    //         }
    //         result = Math.max(result, meetingRooms)
    //     }
    //     return result

    var starts = intervals.concat().sort(function (a, b) {
        return a[0] - b[0];
    });
    var ends = intervals.sort(function (a, b) {
        return a[1] - b[1];
    });
    var rooms = 0;
    var end = 0;
    for (var i = 0; i < intervals.length; i++) {
        if (starts[i][0] < ends[end][1]) {
            rooms++;
        } else {
            end++;
        }
    }
    return rooms;
};