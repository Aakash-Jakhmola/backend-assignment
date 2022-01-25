require('dotenv').config();
const express = require('express');

const app = express();
const nftRoute = require('./routes/nft.route');
const tokenRoute = require('./routes/token.route');



app.use('/nft', nftRoute);
app.use('/token', tokenRoute);


app.listen(8000 || process.env.PORT, () => {
  console.log('Server started');
});
