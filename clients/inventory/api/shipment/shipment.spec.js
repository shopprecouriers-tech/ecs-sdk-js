const rp = require('request-promise-native');

const shipmentService = require('./shipment.service');

describe('Inventory shipment', () => {
  before(() => {
    sinon.stub(rp, 'Request').resolves({ id: 1 });
  });

  it('should create shipment', async () => {
    const shipment = await shipmentService.create({});
    expect(shipment.id).to.be.equal(1);
  });
});

