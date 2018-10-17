const addNum = num => {
  const add = number => number + num;

  return add;
}

const add2 = addNum(2);
const add3 = addNum(3);

const add15 = addNum(15);

module.exports = { add2, add3, add15 };
