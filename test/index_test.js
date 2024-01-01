const assert = require('assert');
const Calculate = require('../index.js');

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 as factorial of 5!', () => {
      // SETUP
      const expected = 120;
      const factored = 5;
      // EXERCISE
      const result = Calculate.factorial(factored);
      // VERIFY
      assert.equal(result, expected);
    });

    it('returns the factorial of an input number', () => {
      // SETUP
      const expected = 6;
      const factored = 3;
      // EXERCISE
      const result = Calculate.factorial(factored);
      // VERIFY
      assert.equal(result, expected);
    });

    it('returns 1 as factorial of 0!', () => {
      // SETUP
      const expected = 1;
      const factored = 0;
      // EXERCISE
      const result = Calculate.factorial(factored);
      // VERIFY
      assert.equal(result, expected);
    });


  });
});
