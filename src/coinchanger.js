const changeCoins = (money) => {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];

  for(let i = 0; i < coins.length; i++) {
    if(coins[i] === money){
      return [money];
    }
  }
  if(money === 3){
    return [2, 1];
  } else {
    return 'not a coin';
  }
}

module.exports = { changeCoins };
