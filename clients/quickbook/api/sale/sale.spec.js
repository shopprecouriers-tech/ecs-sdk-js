// const rp = require('request-promise-native');
// const sinon = require('sinon');
// const { expect } = require('chai');
//
// const saleService = require('./sale.service');
// const sandbox = sinon.createSandbox();
// const fakeResponse = require('./sale.fakeResponse');
// const requestPayloads = require('./sale.requestPayloads');
//
// describe('Create sale', () => {
//   before(() => {
//     sandbox
//       .stub(rp, 'Request')
//       .resolves();
//   });
//
//   after((done) => {
//     sandbox.restore();
//     done();
//   });
//
//   it('should create sale', async () => {
//     const sale = await saleService.create(requestPayloads.create);
//     expect(sale.id).to.be.equal(1);
//   });
//
//
// });
