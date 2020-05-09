const debug = require('debug');
const rp = require('request-promise-native');

const { DELHIVERY_HOST, DELHIVERY_TOKEN } = process.env;
const log = debug('omniinventory/index.js');

exports.createOrder = async (payload) => {
  log('createOrder()', payload);
  if (!payload) {
    return Promise.reject({
      code: 400,
      message: 'Pass payload{}  argument to createOrder method',
    });
  }
  const options = {
    method: 'POST',
    url: `${DELHIVERY_HOST}/api/cmu/create.json`,
    headers:
      {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        authorization: `Token ${DELHIVERY_TOKEN}`,
      },
    body: `format=json&data= ${JSON.stringify(payload)}`,
  };

  const res = await rp(options);

  return res;
};
