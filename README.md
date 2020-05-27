# ECS SDK for JavaScript

[![codecov](https://codecov.io/gh/goECS/ecs-sdk-js/branch/master/graph/badge.svg?token=PNT95664BY)](https://codecov.io/gh/goECS/ecs-sdk-js) | ![Node.js CI](https://github.com/goECS/ecs-sdk-js/workflows/Node.js%20CI/badge.svg)

## Installation

```shell script
npm i ecs-sdk --save
```

## Usage for inventory 

```shell script
PREFIX=https:// # defaults to https://
DOMAIN=yourdomain.com
SECRET=<super-secret>

# for lib/logger
SENTRY_DSN=<sentry-dsn>
```

```js
// import entire SDK
var ECS = require('ecs-sdk');

// import ECS object without services
var ECS = require('ecs-sdk/global');

// import individual service
var INVENTORY = require('ecs-sdk/servers/inventory');

// import individual service
var TRACK = require('ecs-sdk/servers/track');

// import logger
var logger = require('ecs-sdk/lib/logger');
```

# Inventory
- Stock Item Create
- Sale Create
- Shipment Create 


### StockItemCreate
  Create product
  
- [Test Case](https://github.com/goECS-enterprise/inventory/blob/staging/server/api/stockItem/stockItem.controller.spec.ts)

```js
const Payload = {
  description: 'Fash Foam face wash',
  unit: 'TAB.',
  cost_amount: 450,
  gst_percentage: 18,
};
```
const stockId = INVENTORY.sale.create(payload);



### SaleCreate
  Create a sale entry in inventory
  
- [Test Case](https://github.com/goECS-enterprise/inventory/blob/staging/server/api/sale/sale.controller.spec.ts)

```js
const Payload = const payload = {
  customer_id: 1,
  Shipment: {
    awb: 'track7789',
    mode: 'ONLINE',
    date: '2019-08-27',
    partner: 'Delhivery',
    state_id: 'Telangana',
  },
  BillingAddress: {
    pincode: '577432',
    state_id: '36',
    name: 'MD SHAFIUDDIN',
    line1: 'MD SHAFIUDDIN, Firdose nagar, AFS chabua, Near jama masjid, Luxettipet , Telangana, 504215',
  },
  date: '2019-08-27',
  SaleStockItems: [{
    stock_item_id: 21,
    quantity: 1,
    rate_amount: 219.46,
    discount_amount: 0,
  }],
  adjustments: [{
    ledger_id: 10,
    amount: 0,
  }, {
    ledger_id: 1,
    amount: 180,
  }],
  other_bills_amount: 0,
  Order: {
    code: 'order_code',
    date: '2019-08-26',
  },
};
```
const saleId = INVENTORY.sale.create(payload);


### ShipmentCreate
  Create a Shipment
  
- [Test Case](https://github.com/goECS-enterprise/inventory/blob/staging/server/api/shipment/shipment.controller.spec.ts)

```js
const payload = {
  awb: '1655610334390',
  mode: 'ONLINE',
  date: '2019-08-27',
  partner: 'Delhivery',
};
```
const shipmentId = INVENTORY.shipment.create(payload);

**Keywords**
 - Inventory


	
