const getNftsMiddleware = (req, res, next) => {
  const offset = req.query.offset ? parseInt(req.query.offset): 0;
  const limit = req.query.limit ? parseInt(req.query.limit) : 0;
  if(isNaN(offset)) {
    res.status(400).send({success: false, message: 'offset is not valid integer string' });
  } else if(isNaN(limit)) {
    res.status(400).send({success: false, message: 'limit is not valid integer string' });
  } else {
    next();
  }
}

const NftMiddleware = {
  getNftsMiddleware,
};

module.exports = NftMiddleware;