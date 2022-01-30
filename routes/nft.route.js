const router = require('express').Router();
const NftController = require('../controllers/nft.controller');
const NftMiddleware = require('../middleware/nft.middleware');

router.get('/:ethaddress', NftMiddleware.getNftsMiddleware ,NftController.getNfts);

module.exports = router;