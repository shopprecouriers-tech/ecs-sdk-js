const debug = require('debug');
const rp = require('request-promise');

const { OMNIPAY_URL, OMNIPAY_SECRET } = process.env;
const log = debug('omnipay/index.js');

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
    uri: `${OMNIPAY_URL}/api/transactions?token=${OMNIPAY_SECRET}`,
    body: transaction,
    json: true,
  });
};
