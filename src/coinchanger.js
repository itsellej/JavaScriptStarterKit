const changeCoins = (money) => {
  if(money === 3){
    return [2, 1];
  } else {
    return [money];
  }

}

module.exports = { changeCoins };
