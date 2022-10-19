const mergeSort = (arr) => {
    // If the array is only 1 length consider it sorted
    if (arr.length < 2) return arr;

    // Divide array in two halfs
    const pivot = Number.parseInt(arr.length / 2);
    let left_half = arr.slice(0, pivot);
    let right_half = arr.slice(pivot);

    // Sort recursively
    left_half = mergeSort(left_half);
    right_half = mergeSort(right_half);

    // Merged two half after sorting
    return mergeHalfs(left_half, right_half);

    function mergeHalfs(left, right) {
        let merged = [];

        // Compare element by element the two arrays
        while (left.length > 0 && right.length > 0) {
            // Remove the bigger number and add to merged array
            if (left[0] <= right[0]) {
                merged.push(left.shift());
            } else {
                merged.push(right.shift());
            }
        }

        // Concatenate the remaining elements in either array
        return [...merged, ...left_half, ...right_half];
    }
};

console.log(mergeSort([5, 2, 6, 1, 3, 7, 4, 8]));
