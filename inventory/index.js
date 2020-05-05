const debug = require('debug');
const rp = require('request-promise');

const { OMNIINVENOTRY_URL, OMNIINVENOTRY_SECRET } = process.env;
const log = debug('omniinventory/index.js');

exports.createSale = (payload) => {
    log('createTransaction()', payload);
    if(!payload) {
        return Promise.reject({
            code: 400,
            message: 'Pass payload{}  argument to createSale method',
        })
    }
    return rp({
        method: 'POST',
        uri: `${OMNIINVENOTRY_URL}/api/sales?token=${OMNIINVENOTRY_SECRET}`,
        body: payload,
        json: true,
    })
};