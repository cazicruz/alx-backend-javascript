const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', () => {
  describe('type: SUM', () => {
    it('should return the sum of rounded numbers', () => {
      const result1 = calculateNumber('SUM', 3.7, 2.1);
      assert.strictEqual(result1, 6, `Expected: 6, Actual: ${result1}`);

      const result2 = calculateNumber('SUM', 1.2, 3.8);
      assert.strictEqual(result2, 5, `Expected: 5, Actual: ${result2}`);
    });
  });

  describe('type: SUBTRACT', () => {
    it('should return the subtraction of rounded numbers', () => {
      const result1 = calculateNumber('SUBTRACT', 5.5, 2.2);
      assert.strictEqual(result1, 4, `Expected: 4, Actual: ${result1}`);

      const result2 = calculateNumber('SUBTRACT', 10.8, 17.2);
      assert.strictEqual(result2, -6, `Expected: -6, Actual: ${result2}`);
    });
  });

  describe('type: DIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      const result1 = calculateNumber('DIVIDE', 8, 4);
      assert.strictEqual(result1, 2, `Expected: 2, Actual: ${result1}`);

      const result2 = calculateNumber('DIVIDE', 7.5, 2.0);
      assert.strictEqual(result2, 4, `Expected: Actual: ${result2}`);

      const result3 = calculateNumber('DIVIDE', 9, 0);
      assert.strictEqual(result3, 'Error', `Expected: 'Error', Actual: ${result3}`);
    });
  });
});

