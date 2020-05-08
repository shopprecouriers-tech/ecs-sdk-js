const ecsSdk = require('./');

describe('ECS SDK index.js', () => {
  it('should have the keys', () => {
    expect(JSON.stringify(Object.keys(ecsSdk)))
      .to
      .be
      .equal(JSON.stringify([
        'LOGIN',
        'PAY',
        'INVENTORY',
        'DISPATCH',
        'TRACK',
        'NDR',
        'ENGAGE',
        'LOG',
        'LOGGER',
      ]));
  });
});
