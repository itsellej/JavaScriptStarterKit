import * as coinchanger from '../src/coinchanger';

describe('coinchanger', () => {
  describe('changeCoins', () => {
    it('returns 0 when given 0', () => {
      expect(coinchanger.changeCoins(0)).toEqual(0);
    });

    it('returns 1 when given 1', () => {
      expect(coinchanger.changeCoins(1)).toEqual(1);
    });

    it('returns 2 when given 2', () => {
      expect(coinchanger.changeCoins(2)).toEqual(2);
    });

    it('returns 5 when given 5', () => {
      expect(coinchanger.changeCoins(5)).toEqual(5);
    });

    it('returns 10 when given 10', () => {
      expect(coinchanger.changeCoins(10)).toEqual(10);
    });

    it('returns 20 when given 20', () => {
      expect(coinchanger.changeCoins(20)).toEqual(20);
    });

    it('returns 50 when given 50', () => {
      expect(coinchanger.changeCoins(50)).toEqual(50);
    });

    it('returns 100 when given 100', () => {
      expect(coinchanger.changeCoins(100)).toEqual(100);
    });

    it('returns 200 when given 200', () => {
      expect(coinchanger.changeCoins(200)).toEqual(200);
    });
  });
});
