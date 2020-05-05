const debug = require('debug');

const { OMNIINVENOTRY_URl, OMNIINVENOTRY_SECRET } = process.env;
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
        uri: `${OMNIINVENOTRY_URl}/api/sales?token=${OMNIINVENOTRY_SECRET}`,
        body: payload,
        json: true,
    })
};