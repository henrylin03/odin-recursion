function mergeSort(arr) {
  // base: single elem array
  if (arr.length === 1) return arr;

  // split in half
  const middleIdx = Math.round(arr.length / 2);

  // sorts
  const left = mergeSort(arr.slice(0, middleIdx));
  const right = mergeSort(arr.slice(middleIdx));

  // return left.concat(right).sort(compareNumbers);
}

function merge(left, right, compareFn) {
  return;
}

// test cases
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
