function mergeSort(arr) {
  // base: single elem array - already sorted because only one elem
  if (arr.length === 1) return arr;

  // recursive step
  const middleIdx = Math.round(arr.length / 2); // split in half
  const left = mergeSort(arr.slice(0, middleIdx)); // these will be sorted recursively
  const right = mergeSort(arr.slice(middleIdx)); // these will be sorted recursively

  // merge - the inputs should already be sorted
  return mergeArrays(left, right);
}

function mergeArrays(left, right) {
  let res = [];

  // compare and then push to the result array
  let leftIdx = 0;
  let rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      res.push(left[leftIdx]);
      leftIdx++;
    } else {
      res.push(right[rightIdx]);
      rightIdx++;
    }
  }

  // once all elems run out from either left or right side, just add them on, as they are already sorted
  res.push(...left.slice(leftIdx));
  res.push(...right.slice(rightIdx));

  return res;
}

// test cases
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
