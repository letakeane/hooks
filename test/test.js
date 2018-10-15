const expect = require('chai').expect;
const add2 = require('../index.js').add2;
const add3 = require('../index.js').add3;

describe('add2 function', () => {
  it('should add 2 to the given argument', () => {
    const actual = add2(3);
    const expected = 5;

    expect(actual).to.equal(expected);
  })
})
