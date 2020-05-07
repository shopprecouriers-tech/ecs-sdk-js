const debug = require('debug');
const rp = require('request-promise');

const { OMNIINVENTORY_URL, OMNIINVENTORY_SECRET } = process.env;
const log = debug('omniinventory/index.js');

exports.createSale = (payload) => {
    log('createSale()', payload);
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

exports.createShipment = (payload) => {
    log('createshipment()', payload);
    if(!payload) {
        return Promise.reject({
            code: 400,
            message: 'Pass payload{}  argument to createShipment method',
        })
    }
    return rp({
        method: 'POST',
        uri: `${OMNIINVENTORY_URL}/api/shipments?token=${OMNIINVENTORY_SECRET}`,
        body: payload,
        json: true,
    })
};