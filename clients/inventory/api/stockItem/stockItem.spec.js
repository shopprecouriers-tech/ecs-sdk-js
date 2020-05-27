const rp = require('request-promise-native');
const { expect } = require('chai');

const stockItemService = require('./stockItem.service');

describe('Inventory stock Item', () => {
  it('should create Stock Item', async () => {
    const stockItemId = await stockItemService.create({
      description: 'Fash Foam face wash',
      unit: 'TAB.',
      cost_amount: 450,
      gst_percentage: 18,
    });
    expect(stockItemId.id);
  });
});

