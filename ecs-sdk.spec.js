const ecsSdk = require('./');

describe('ECS SDK index.js', () => {
  it('should have the keys', () => {
    expect(Object.keys(ecsSdk))
      .to
      .be
      .equal([
        'login',
        'pay',
        'inventory',
        'dispatch',
        'track',
        'ndr',
        'engage',
        'log',
      ]);
  });
});
