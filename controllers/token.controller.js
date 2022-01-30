const { makeERC20TokenObject } = require('../helpers/token.helper');
const ApiService = require('../services/api.service');


const getTokens = async (req, res) => {
  try {
    const tokensData = await ApiService.getTokensFromMoralis(req.params.ethaddress);
    const tokens = tokensData.map((token) => makeERC20TokenObject(token));
    res.send({ success: true, tokens });
  } catch (e) {
    console.log('Getting Tokens failed\n',e);
    res.status(500).send({ success: false, message: 'Internal Server Error' });
  }
}


const TokenController = {
  getTokens,
};

module.exports = TokenController;