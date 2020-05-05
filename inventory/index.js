const debug = require('debug');
const rp = require('request-promise');

const { OMNIINVENTORY_URL, OMNIINVENTORY_SECRET } = process.env;
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
        uri: `${OMNIINVENTORY_URL}/api/sales?token=${OMNIINVENTORY_SECRET}`,
        body: payload,
        json: true,
    })
};