const axios = require('axios');

axios.defaults.headers.get['x-api-key'] = process.env.API_KEY;


const getNftsApi = async(ethaddress, offset = 0, limit = 10) => {
  try {
    const nftApiResponse = await axios.get(`https://deep-index.moralis.io/api/v2/${ethaddress}/nft?chain=eth&format=decimal&offset=${offset}&limit=${limit}`);
    return nftApiResponse.data;
  } catch(e) {
    console.log('Error occured during fetching Nfts from morila', e);
    throw new Error('Fetching Tokens Failed');
  }
};


const getTokensApi = async(ethaddress) => {
  try {
    const tokenApiResponse = await axios.get(`https://deep-index.moralis.io/api/v2/${ethaddress}/erc20?chain=eth`);
    return tokenApiResponse.data;
  } catch (e) {
    console.log('Error occured during fetching Tokens from morila', e);
    throw new Error('Fetching Tokens Failed');
  }
}


const ApiService = {
  getTokensApi,
  getNftsApi,
};

module.exports = ApiService;