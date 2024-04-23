function mergeArrays(a, b) {
    // Initialize pointers for arrays a and b
    let i = a.length - 1;
    let j = b.length - a.length - 1;
    let k = b.length - 1;
    console.log(i,j,k)
    console.log(b.length)

    // Merge arrays a and b
    while (i >= 0 && j >= 0) {
        if (a[i] > b[j]) {
            b[k] = a[i];
            i--;
        } else {
            b[k] = b[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in array a
    while (i >= 0) {
        b[k] = a[i];
        i--;
        k--;
    }

    // No need to handle remaining elements in array b as they are already in place

    return b;
}

// Example usage
const a = [1, 5, 9, 11, 13];
const b = [3, 6, 7, 10, 12, , , , , ,]; // Additional space in array b

const mergedArray = mergeArrays(a, b);
console.log(mergedArray); // Output: [1, 3, 5, 6, 7, 9, 10, 11, 12, 13]
