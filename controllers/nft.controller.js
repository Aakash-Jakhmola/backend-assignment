const { makeNftObject } = require('../helpers/nft.helper');
const ApiService = require('../services/api.service');


const getNfts = async (req, res) => {
  try {
    const offset = req.params.offset || 0 ;
    const nftResponse = await ApiService.getNftsApi(req.params.ethaddress, offset);
    const nfts = nftResponse.result.map((nft) => makeNftObject(nft));
    res.send({ success: true, nfts });
  } catch (e) {
    console.log('Getting Nfts failed', e);
    res.status(500).send({ success: false, message: 'Internal Server Error' });
  }
}


const NftController = {
  getNfts,
};

module.exports = NftController;