const debug = require('debug');
const rp = require('request-promise-native');

const { DELHIVERY_HOST, DELHIVERY_TOKEN } = require('../../config/environment');

const log = debug('inventory/index.js');

exports.createOrder = async (payload) => {
  log('createOrder()', payload);
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

exports.getAWB = async (awbNumber) => {
  const options = {
    method: 'GET',
    url: `${DELHIVERY_HOST}/api/p/packing_slip`,
    headers:
      {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        authorization: `Token ${DELHIVERY_TOKEN}`,
      },
    qs: {
      wbns: awbNumber,
    },
    json: true,
  };

  const res = await rp(options);

  return res;
};
