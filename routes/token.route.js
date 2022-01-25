const router = require('express').Router();
const TokenController = require('../controllers/token.controller');

router.get('/:ethaddress', TokenController.getTokens);

module.exports = router;
