// const rp = require('request-promise-native');
// const { expect } = require('chai');
// const sinon = require('sinon');
//
// const stockItemService = require('./stockItem.service');
//
// describe('Create StockItem', () => {
//   before(() => {
//     sinon.stub(rp, 'Request')
//       .resolves({
//         object_id: 1,
//         TrackQtyOnHand: true,
//         Name: 'Expensive tooth cream',
//         QtyOnHand: 100,
//         IncomeAccountRef: {
//           name: 'Sales of Product Income',
//           value: '69',
//         },
//         AssetAccountRef: {
//           name: 'Inventory',
//           value: '130',
//         },
//         InvStartDate: '2015-01-01',
//         Type: 'Inventory',
//         ExpenseAccountRef: {
//           name: 'Cost of Goods Sold',
//           value: '128',
//         },
//         PurchaseCost: 125,
//         UnitPrice: 275,
//         PurchaseDesc: 'purchase from vendor',
//         Description: 'New, updated description for Expensive face wash',
//       });
//   });
//
//   it('should create stockItem', async () => {
//     const stockItem = await stockItemService.create({});
//     expect(stockItem.body);
//   });
// });
