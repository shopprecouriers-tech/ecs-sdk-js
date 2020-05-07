const rp = require('request-promise-native');

const saleService = require('./');

describe('Inventory Sale', () => {
  before(() => {
    sinon.stub(rp, 'Request').resolves({ id: 1});
  });

  it('should create sale', async () => {
    const sale = await saleService.create({});
    console.log(sale)
  });
});

