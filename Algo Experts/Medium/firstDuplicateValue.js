function firstDuplicateValue(array) {
    let set = new Set()
    for (let num of array) {
        if (!set.has(num)) {
            set.add(num)
        } else if (set.has(num)) {
            return num
        }
    }
    return -1
}