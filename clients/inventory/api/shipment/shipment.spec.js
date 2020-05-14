// const rp = require('request-promise-native');
// const sandbox = require('sinon').createSandbox();
// const shipmentService = require('./shipment.service');
//
// describe('Inventory shipment', () => {
//   beforeEach(() => {
//     sandbox.stub(rp, 'Request').resolves({ id: 1 });
//   });
//
//   it('should create shipment', async () => {
//     const shipment = await shipmentService.create({});
//     expect(shipment.id).to.be.equal(1);
//   });
//
//   after((done) => {
//     sandbox.restore();
//     done();
//   })
// });
//
