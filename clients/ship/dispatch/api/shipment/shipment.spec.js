import request from 'supertest';
import { expect } from 'chai';

import app from '../../app';

const data = {
  order_code: 'asd968895',
  weight: 12, // In kg
  sales_channel_created_at: '2020-05-19',
  airway_bill_number: null, // optional
  products_desc: 'S-1 (Total: 2)1. Curesk+n Shampoo (100ml) 2.Curesk+n Conditioner (80ml)',
  total_amount: 1000, // amount in INR
  payment_mode: 'Pre­paid', // It can be, Pre­paid/COD/Pickup/REPL/Cash
  cod_amount: null, // mendatory is payment_mode is COD
  invoice_reference: 'asd968892', // optional
  seller_invoice_reference: 'asd968892', // optional
  DeliveryAddress: {
    name: 'Manjesh',
    line1: '#181 2nd cross road',
    line2: 'koramangala',
    phone: 9351523344,
    city: 'Bengaluru',
    state: 'Karnataka',
    country: 'India',
    pincode: 560034,
  }
};

describe('Shipment Controllers', () => {
  before((done) => {
    app.on('appStarted', () => {
      done();
    });
  });

  it('should list shipment', (done) => {
    request(app)
      .get('/api/orders')
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        console.log(res.body);
        expect(res.body);
        done();
      })
      .catch((err) => done(err));
  });

  it('should show shipment', (done) => {
    request(app)
      .get('/api/orders/stest0022')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        console.log(res.body);
        expect(res.body);
        done();
      })
      .catch((err) => done(err));
  });

  it('creates shipment', (done) => {
    request(app)
      .post('/api/shipments')
      .send(data)
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body);
        done();
      })
      .catch((err) => done(err));
  });
});

