import * as coinchanger from '../src/coinchanger';

describe('coinchanger', () => {
  describe('changeCoins', () => {
    [200, 100, 50, 20, 10, 5, 2, 1].forEach(coin => {
      it('returns coin when given coin', () => {
        expect(coinchanger.changeCoins(coin)).toEqual([coin]);
      });
    })

    it('returns [2, 1] when given 3', () => {
      expect(coinchanger.changeCoins(3)).toEqual([2, 1]);
    });

    it('returns [2, 2] when given 4', () => {
      expect(coinchanger.changeCoins(4)).toEqual([2, 2]);
    });

    it('returns [5, 2, 1] when given 8', () => {
      expect(coinchanger.changeCoins(8)).toEqual([5, 2, 1]);
    });

    it('returns [10, 5, 2, 1] when given 18', () => {
      expect(coinchanger.changeCoins(18)).toEqual([10, 5, 2, 1]);
    });

    it('returns [100, 10, 5, 2, 1] when given 118', () => {
      expect(coinchanger.changeCoins(118)).toEqual([100, 10, 5, 2, 1]);
    });

    it('returns [200, 100, 10, 5, 2, 1] when given 318', () => {
      expect(coinchanger.changeCoins(318)).toEqual([200, 100, 10, 5, 2, 1]);
    });

    it('returns [200, 100, 50, 20, 10, 5, 2, 1] when given 388', () => {
      expect(coinchanger.changeCoins(388)).toEqual([200, 100, 50, 20, 10, 5, 2, 1]);
    });

    it('returns [200, 200, 100, 50, 20, 10, 5, 2, 1] when given 588', () => {
      expect(coinchanger.changeCoins(588)).toEqual([200, 200, 100, 50, 20, 10, 5, 2, 1]);
    });

    it('returns [200, 200, 200, 200, 200, 200, 200, 100, 50, 20, 10, 5, 2, 1] when given 1588', () => {
      expect(coinchanger.changeCoins(1588)).toEqual([200, 200, 200, 200, 200, 200, 200, 100, 50, 20, 10, 5, 2, 1]);
    });
  });
});
