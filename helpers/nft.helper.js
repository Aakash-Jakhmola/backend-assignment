const makeNftObject = data => {
  const metadata = JSON.parse(data.metadata);
  return {
    tokenId: data.token_id,
    contractAddress: data.token_address,
    image: metadata ? metadata.image: null,
    name: metadata ? metadata.name: null,
    description: metadata ? metadata.description : null,
  };
};


module.exports = {
  makeNftObject,
};