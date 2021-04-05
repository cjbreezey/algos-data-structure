// splice method

var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m);

    var i = 0;
    var j = 0;

    while (j < nums2.length) {
        if (nums1[i] === undefined || nums1[i] > nums2[j]) {
            nums1.splice(i, 0, nums2[j]);
            j++;
            i++;
        } else {
            i++;
        }
    }
};

// 2 pointer method

var merge = function (nums1, m, nums2, n) {

    // cur is the last index of nums1 array

    let cur = m + n - 1; // 1

    // we wanna do this if we have elements in both the arrays
    while (m > 0 && n > 0) { // m = 1 n = 1
        if (nums1[m - 1] < nums2[n - 1]) { // 1 < 2
            nums1[cur] = nums2[n - 1]
            n--;
        }
        else {
            nums1[cur] = nums1[m - 1]
            m--
        }
        cur--;
    }

    // if there are no elememts in nums1 then we add all nums2 to nums1

    while (n > 0) {
        nums1[cur] = nums2[n - 1]
        n--; cur--;
    }

    // we do not wanna return anything ;)
};


// example
// nums1 = [1,2,3,0,0,0]
// m = 3
// nums2 = [2,5,6]
// n = 3