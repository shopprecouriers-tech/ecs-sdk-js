const rp = require('request-promise-native');
const { expect } = require('chai');

const shipmentService = require('./shipment.service');

describe('Inventory Shipment', () => {
  it('should create shipment', async () => {
    const shipmentId = await shipmentService.create({
      awb: '1655610334390',
      mode: 'ONLINE',
      date: '2019-08-27',
      partner: 'Delhivery',
      state_id: 29,
      customer_id: 1,
    });
    expect(shipmentId.id);
  });
});

