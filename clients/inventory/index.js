const sale = require('./api/sale/sale.service');
const shipment = require('./api/shipment/shipment.service');
const stockItem = require('./api/stockItem/stockItem.service');

module.exports = {
  sale,
  shipment,
  stockItem,
};
