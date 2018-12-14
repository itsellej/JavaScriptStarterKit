const changeCoins = (money) => {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const giveChange = []

  coins.forEach(coin => {
    while(money >= coin){
      giveChange.push(coin);
      money -= coin;
    }
  })
  return giveChange;
}

module.exports = { changeCoins };
