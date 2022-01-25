const router = require('express').Router();
const NftController = require('../controllers/nft.controller');

router.get('/:ethaddress', NftController.getNfts);

module.exports = router;