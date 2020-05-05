# omni-sdk-js


## Installation

```shell script
npm i omni-sdk-js --save
```

## Usage for inventory 

```shell script
OMNIINVENOTRY_URl=https://inventory.yourdomain.com
OMNIINVENOTRY_SECRET=<super-secret>
```

```js

const omniSdkJs = require('omni-sdk-js');


const payload = {
  Order: {
    code: 'C0826SQ8Siiiii',
    date: '2019-08-26',
  },
  Shipment: {
      awb: '1655610334390',
      mode: 'ONLINE',
      date: '2019-08-27',
      partner: 'DHL',
      state_id: 'Telangana'
  },
  BillingAddress: {
      pincode: '577432',
      state_id: '36',
      name: 'MD SHAFIUDDIN',
      line1: 'MD SHAFIUDDIN, Firdose nagar, AFS chabua, Near jama masjid, Luxettipet , Telangana, 504215',
  },
  date: '2019-08-27',
  SaleStockItems: [{
    stock_item_id: 1,
    quantity: 1,
    rate_amount: 405,
    discount_amount: -90
  }],
  adjustments:[{
    ledger_id: LEDGERS.COUPONS,
    amount: 0,
  }, {
    ledger_id: LEDGERS.USER_DISCOUNT,
    amount: 180,
  }],
  other_bills_amount: 0
};

omniInventory.createSale(payLoad);

```
