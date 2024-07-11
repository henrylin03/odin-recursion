function mergeSort(arr) {
  // split in half
  const halfIdx = Math.round(arr.length / 2);

  // console.log(arr.slice(0, halfIdx));
  // console.log(arr.slice(halfIdx));

  // recursive sorts
  // const leftArr = mergeSort(arr.slice(0, halfIdx));
  // const rightArr = mergeSort(arr.slice(halfIdx + 1));

  // merge sorted subarrays using temp array
}

// test cases
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
