const debug = require('debug');
const rp = require('request-promise-native');

const { PAY_URL, PAY_SECRET } = require('../../config/environment');

const log = debug('pay/index.js');

exports.createTransaction = (transaction) => {
  log('createTransaction()', transaction);
  if (!transaction) {
    return Promise.reject({
      code: 400,
      message: 'Pass transaction{}  argument to createTransaction method',
    });
  }
  return rp({
    method: 'POST',
    uri: `${PAY_URL}/api/transactions?token=${PAY_SECRET}`,
    body: transaction,
    json: true,
  });
};
