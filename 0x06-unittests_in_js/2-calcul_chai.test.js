const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require('./1-calcul');


describe('calculateNumber', () => {
  describe('type: SUM', () => {
    it('should return the sum of rounded numbers', () => {
      const result1 = calculateNumber('SUM', 3.7, 2.1);
      expect(result1).to.equal(6);

      const result2 = calculateNumber('SUM', 1.2, 3.8);
      expect(result2).to.equal(5);
    });
  });

  describe('type: SUBTRACT', () => {
    it('should return the subtraction of rounded numbers', () => {
      const result1 = calculateNumber('SUBTRACT', 5.5, 2.2);
      expect(result1).to.equal(-4);

      const result2 = calculateNumber('SUBTRACT', 10.8, 17.2);
      expect(result2).to.equal(6);
    });
  });

  describe('type: DIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      const result1 = calculateNumber('DIVIDE', 8, 4);
      expect(result1).to.equal(2);

      const result2 = calculateNumber('DIVIDE', 7.5, 2.0);
      expect(result2).to.equal(4);

      const result3 = calculateNumber('DIVIDE', 9, 0);
      expect(result3).to.equal('Error');
    });
  });
});
