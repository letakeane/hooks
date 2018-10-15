const addNum = num => {
  const add = number => number + num;

  return add;
}

const add2 = addNum(2);
const add3 = addNum(3);

module.exports = { add2, add3 };
