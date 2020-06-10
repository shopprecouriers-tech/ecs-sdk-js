const { expect } = require('chai');

const creditNoteService = require('./creditNote.service');

describe('Inventory Sale', () => {
  it('should create sale', async () => {
    const creditNote = await creditNoteService.create({
      customer_id: 1,
      BillingAddress: {
        pincode: '577432',
        state_id: '29',
        name: 'MD SHAFIUDDIN',
        line1: 'MD SHAFIUDDIN, Firdose nagar, AFS chabua, Near jama masjid, Luxettipet , Telangana, 504215',
      },
      date: '2019-08-27',
      BillEmail: {
        Address: "punith.hs90@gmail.com"
      },
      CreditNoteStockItems: [{
        stock_item_id: 31,
        quantity: 1,
        rate_amount: 219.46,
        discount_amount: 0,
        gst_percentage: 18,
        description: 'face cream',
        taxable_amount: 300,
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
        code: 'order12v34',
        date: '2019-08-26',
      },
    });
    expect(creditNote.id);
  });
});

