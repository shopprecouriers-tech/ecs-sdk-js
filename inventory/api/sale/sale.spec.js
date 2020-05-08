const rp = require('request-promise-native');

const saleService = require('./sale.service');

describe('Inventory Sale', () => {
  before(() => {
    sinon.stub(rp, 'Request').resolves({ id: 1 });
  });

  it('should create sale', async () => {
    const sale = await saleService.create({});
    expect(sale.id).to.be.equal(1);
  });
});

