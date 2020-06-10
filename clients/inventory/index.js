const sale = require('./api/sale/sale.service');
const shipment = require('./api/shipment/shipment.service');
const stockItem = require('./api/stockItem/stockItem.service');
const creditNote = require('./api/creditNote/creditNote.service');

module.exports = {
  sale,
  shipment,
  stockItem,
  creditNote,
};
