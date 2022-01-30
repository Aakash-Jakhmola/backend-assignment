const axios = require('axios');

axios.defaults.headers.get['x-api-key'] = process.env.API_KEY;


const getNftsFromMoralis = async(ethaddress, offset = 0, limit = 10) => {
  try {
    const nftApiResponse = await axios.get(`https://deep-index.moralis.io/api/v2/${ethaddress}/nft?chain=eth&format=decimal&offset=${offset}&limit=${limit}`);
    return nftApiResponse.data;
  } catch(e) {
    console.log('Error occured during fetching Nfts from morila', e);
    throw new Error('Fetching Nfts from Moralis failed');
  }
};


const getTokensFromMoralis = async(ethaddress) => {
  try {
    const tokenApiResponse = await axios.get(`https://deep-index.moralis.io/api/v2/${ethaddress}/erc20?chain=eth`);
    return tokenApiResponse.data;
  } catch (e) {
    console.log('Error occured during fetching Tokens from morila', e);
    throw new Error('Fetching Tokens from Moralis failed');
  }
}


const ApiService = {
  getTokensFromMoralis,
  getNftsFromMoralis,
};

module.exports = ApiService;