const assert = require('assert');
const calculateNumber = require('./1-calcul').calculateNumber; // Assuming the calculateNumber function is defined in a separate file

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    // Test case 1
    const result1 = calculateNumber('SUM', 3.7, 2.1);
    assert.strictEqual(result1, 6,`Expected: 6, Actual: ${result1}`);

    // Test case 2
    const result2 = calculateNumber('DIVIDE', 1.2, 0.2);
    assert.strictEqual(result2, 'Error',`Expected: Error, Actual: ${result2}`);

    // Test case 3
    const result3 = calculateNumber('SUBTRACT', 5.5, 4.4);
    assert.strictEqual(result3, -2, `Expected: -2, Actual: ${result3}`);
  });
});
