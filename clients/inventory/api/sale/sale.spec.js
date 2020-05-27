const rp = require('request-promise-native');
const { expect } = require('chai');

const saleService = require('./sale.service');

describe('Inventory Sale', () => {
  it('should create sale', async () => {
    const sale = await saleService.create({
      customer_id: 1,
      Shipment: {
        awb: '1655610334390',
        mode: 'ONLINE',
        date: '2019-08-27',
        partner: 'Delhivery',
        state_id: 'Telangana',
      },
      BillingAddress: {
        pincode: '577432',
        state_id: '36',
        name: 'MD SHAFIUDDIN',
        line1: 'MD SHAFIUDDIN, Firdose nagar, AFS chabua, Near jama masjid, Luxettipet , Telangana, 504215',
      },
      date: '2019-08-27',
      SaleStockItems: [{
        stock_item_id: 21,
        quantity: 1,
        rate_amount: 219.46,
        discount_amount: 0,
      }, {
        stock_item_id: 33,
        quantity: 1,
        rate_amount: 330.15,
        discount_amount: 0,
      }, {
        stock_item_id: 8,
        quantity: 1,
        rate_amount: 944.63,
        discount_amount: 0,
      }, {
        stock_item_id: 56,
        quantity: 1,
        rate_amount: 219.46,
        discount_amount: 0,
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
        code: 'oif7ihchgljupf',
        date: '2019-08-26',
      },
    });
    expect(sale.id);
  });
});

