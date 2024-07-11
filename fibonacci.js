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

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));
console.log(fibs(3));
console.log(fibs(10));
