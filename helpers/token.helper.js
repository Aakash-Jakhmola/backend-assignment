const makeERC20TokenObject = data => {
  return {
    contractAddress: data.token_address,
    name: data.name,
    logo: data.logo,
    balance: data.balance,
  };
};


module.exports = {
  makeERC20TokenObject,
};