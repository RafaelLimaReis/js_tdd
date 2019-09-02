import { expect } from 'chai';
import * as calc from '../src/main';

describe('Calc', () => {
//smoke test
describe('smoke tests', () => {
  it('should exist the calc lib', () => {
      expect(calc).to.exist;
    });

    it('Should exist method sum', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).be.instanceOf(Function);
    });
    it('Should exist method sub', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).be.instanceOf(Function);
    });
    it('Should exist method mult', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).be.instanceOf(Function);
    });
    it('Should exist method div', () => {
      expect(calc.div).to.exist;
      expect(calc.div).be.instanceOf(Function);
    });
  });

  describe('Sum', () => {
    it('should return 4 when "sum(2,2)"', () => {
      expect(calc.sum(2,2)).to.equal(4);
    });
  });

  describe('sub', () => {
    it('should return 4 when "sub(6,2)"', () => {
      expect(calc.sub(6,2)).to.equal(4);
    });

    it('should return -4 when "sub(6,10)"', () => {
      expect(calc.sub(6,10)).to.equal(-4);
    });
  });

  describe('div', () => {
    it('should return 4 when "div(8,2)"', () => {
      expect(calc.div(8,2)).to.equal(4);
    });

    it('should return "não é possivel divisão por zero" when divide by 0', () => {
      expect(calc.div(8,0)).to.be.equal('não é possivel divisão por zero');
    });
  });

  describe('mult', () => {
    it('should return 4 when "mult(2,2)"', () => {
      expect(calc.mult(2,2)).to.equal(4);
    });
  });
});
