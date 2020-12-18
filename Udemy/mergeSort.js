// merge sort problem

arr = [100, -40, 500]

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);
    return merge(leftSorted, rightSorted);
}

function merge(left, right) {
    let merged = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            merged.push(left.shift())
        } else {
            merged.push(right.shift());
        }
    }
    return merged.concat(left, right)
}

mergeSort(arr)