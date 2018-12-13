import * as coinchanger from '../src/coinchanger';

describe('coinchanger', () => {
  describe('changecoins', () => {
    it('returns 0 when given 0', () => {
      expect(coinchanger.changecoins(0)).toEqual(0);
    });
  });
});
