// using iteration
const fibs = (count) => {
  console.log(`the count is ${count}.`);

  // guard clause
  if (count <= 0 || !Number.isInteger(count)) return [];

  // create placeholders
  const res = [0].concat(new Array(count - 1).fill(1));
  if (count < 3) return res.slice(0, count);

  let idx = 2;
  while (idx < count) {
    res[idx] = res[idx - 1] + res[idx - 2];
    idx++;
  }

  return res;
};

// using recursion
const fibsRec = (count) => {
  console.log(`the count is ${count}.`);

  const firstTwoFibs = [0, 1];
  // base
  if (count <= 2) return firstTwoFibs.slice(0, count);

  // recursive
  // fibsRec(count - 1);
  // return fibsRec(count - 1).push(num);
};

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(8));
console.log(fibsRec(3));
console.log(fibsRec(10));
