
exports.create = {
  customer_id: 647,
  BillingAddress: {
    pincode: '577432',
    state_id: '36',
    name: 'MD SHAFIUDDIN',
    line1: 'MD SHAFIUDDIN, Firdose nagar, AFS chabua, Near jama masjid, Luxettipet , Telangana, 504215',
  },
  date: '2019-08-27',
  SaleStockItems: [{
    stock_item_id: 91,
    quantity: 1,
    rate_amount: 405,
    discount_amount: -90,
  }, {
    stock_item_id: 92,
    quantity: 1,
    rate_amount: 405,
    discount_amount: -90,
  }],
  adjustments: [{
    ledger_id: 1,
    amount: 0,
  }, {
    ledger_id: 1,
    amount: 180,
  }],
  other_bills_amount: 0,
  Order: {
    code: 'order-23223',
    date: '2019-08-26',
  },
};
