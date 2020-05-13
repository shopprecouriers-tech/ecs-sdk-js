const rp = require('request-promise-native');

const deliveryService = require('./');

describe('Delhivery Order', () => {
  before(() => {
    sinon.stub(rp, 'Request')
      .resolves({
        cash_pickups_count: 0,
        package_count: 2,
        upload_wbn: 'UPL14204591278668202717',
        replacement_count: 0,
        rmk: 'An internal Error has occurred, Please get in touch with client.support@delhivery.com',
        pickups_count: 0,
        packages: [
          {
            status: 'Fail',
            client: 'CURESKIN EXPRESS',
            sort_code: null,
            remarks: [
              'Duplicate order id',
            ],
            waybill: '1655610631794',
            cod_amount: 1000,
            payment: 'COD',
            serviceable: false,
            refnum: 'stest0021',
          },
          {
            status: 'Fail',
            client: 'CURESKIN EXPRESS',
            sort_code: null,
            remarks: [
              'Duplicate order id',
            ],
            waybill: '1655610631805',
            cod_amount: 1000,
            payment: 'COD',
            serviceable: false,
            refnum: 'stest0022',
          },
        ],
        cash_pickups: 0,
        cod_count: 0,
        success: false,
        prepaid_count: 0,
        cod_amount: 0,
      });
  });

  it('should create sale', async () => {
    const order = await deliveryService.createOrder({});
    expect(order.packages[0].waybill)
      .to
      .be
      .equal('1655610631794');
  });
});
