const { makeNftObject } = require('../helpers/nft.helper');
const ApiService = require('../services/api.service');


const getNfts = async (req, res) => {
  try {
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 20;
    const nftResponse = await ApiService.getNftsFromMoralis(req.params.ethaddress, offset, limit);
    const nfts = nftResponse.result.map((nft) => makeNftObject(nft));
    res.send({ success: true, nfts });
  } catch (e) {
    console.log('Getting Nfts failed\n', e);
    res.status(500).send({ success: false, message: 'Internal Server Error' });
  }
}


const NftController = {
  getNfts,
};

module.exports = NftController;