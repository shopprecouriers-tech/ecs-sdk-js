const { expect } = require('chai');

const stockItemService = require('./stockItem.service');

describe('Inventory stock Item', () => {
  it('should create Stock Item', async () => {
    const stockItemId = await stockItemService.create({
      description: 'expensive Shampoo',
      hsn_code: '897846',
      quantity: 1,
      cost_amount: 320,
      discount: 100,
      total: 220,
      gst_percentage: 12,
    });
    expect(stockItemId.id);
  });
});

describe('Inventory stock Item', () => {
  it('should Update Stock Item', async () => {
    const stockItemId = await stockItemService.update({
      description: 'Expensive Soap',
      hsn_code: '897846',
      quantity: 2,
      cost_amount: 320,
      discount: 100,
      total: 220,
      gst_percentage: 12,
      id: 229,
    });
    expect(stockItemId.id);
  });
});
