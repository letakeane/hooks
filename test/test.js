const expect = require('chai').expect;
const add2 = require('../index.js').add2;
const add3 = require('../index.js').add3;

describe('add2 function', () => {
  it('should add 2 to a positive number', () => {
    const actual = add2(3);
    const expected = 5;

    expect(actual).to.equal(expected);
  })

  it('should add 2 to a negative number', () => {
    const actual = add2(-1);
    const expected = 1;

    expect(actual).to.equal(expected);
  })
})

describe('add3 function', () => {
  it('should add 3 to a positive number', () => {
    const actual = add3(13);
    const expected = 16;

    expect(actual).to.equal(expected);
  })

  it('should add 3 to a negative number', () => {
    const actual = add3(-1);
    const expected = 2;

    expect(actual).to.equal(expected);
  })
})
