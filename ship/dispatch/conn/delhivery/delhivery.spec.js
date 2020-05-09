const rp = require('request-promise-native');

const deliveryService = require('./');

describe('Delhivery Order', () => {
  before(() => {
    sinon.stub(rp, 'Request')
      .resolves({ packages: [{ waybill: '1655610631794' }] });
  });

  it('should create sale', async () => {
    const order = await deliveryService.createOrder({});
    expect(order.packages[0].waybill)
      .to
      .be
      .equal('1655610631794');
  });
});
