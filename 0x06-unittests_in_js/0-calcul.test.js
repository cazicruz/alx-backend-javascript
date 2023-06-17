const assert = require('assert');
const calculateNumber = require('./0-calcul').calculateNumber;

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    // Test case 1
    const result1 = calculateNumber(3.7, 2.1);
    assert.strictEqual(result1, 6);

    // Test case 2
    const result2 = calculateNumber(1.2, 3.8);
    assert.strictEqual(result2, 5);

    // Test case 3
    const result3 = calculateNumber(5.5, 4.4);
    assert.strictEqual(result3, 10);
  });
});
