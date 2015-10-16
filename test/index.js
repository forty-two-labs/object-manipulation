import {expect} from 'chai';
import { removeNestedKey } from '../src/';

describe('removeNestedKey', () => {
  describe('if the object and key passed is valid', () => {
    let obj;
    let newObj;

    beforeEach(() => {
      obj = {a: 1, b: 2};
      newObj = removeNestedKey(obj, 'a');
    });

    it('should return a new object with key removed', () => {
      expect(newObj.b).to.equal(2);
      expect(newObj.a).to.be.undefined;
    });

    it('should not mutate the object passed', () => {
      expect(obj).to.eql({a: 1, b: 2});
    });
  });

  describe('if no key passed', () => {
    it('should throw exception', () => {
      expect(() => {
        removeNestedKey({a: 1, b: 2});
      }).to.throw(Error);
    });
  });
});
