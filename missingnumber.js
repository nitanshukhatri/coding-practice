function misingNumInSeq(source, min = 0, max = source.length - 1) {
    if (min >= max) {
        return min + 1;
    }
    let pivot = Math.floor((min + max) / 2);
    // problem is in right side. Only look at right sub array
    if (source[pivot] === pivot + 1) {
        return misingNumInSeq(source, pivot + 1, max);
    } else {
        return misingNumInSeq(source, min, pivot);
    }
}

misingNumInSeq([1, 2, 3, 5, 6, 9, 10, 15]);