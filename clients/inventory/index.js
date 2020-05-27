const sale = require('./api/sale');
const shipment = require('./api/shipment/shipment.service');
const stockItem = require('./api/stockItem/stockItem.service');

module.exports = {
  sale,
  shipment,
  stockItem,
};
