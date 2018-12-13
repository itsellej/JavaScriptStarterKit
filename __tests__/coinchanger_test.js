import * as coinchanger from '../src/coinchanger';

describe('coinchanger', () => {
  describe('changeCoins', () => {
    it('returns 0 when given 0', () => {
      expect(coinchanger.changeCoins(0)).toEqual(0);
    });
  });
});
