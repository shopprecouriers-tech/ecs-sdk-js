const rp = require('request-promise-native');

const { signup } = require('./');

const userId = 1235;

describe('Engage Signup User', () => {
  before(() => {
    sinon.stub(rp, 'Request').resolves({ id: 1 });
  });

  it('should register the user', (done) => {
    signup({
      id: userId,
      first_name: 'Vikas',
      last_name: 'Kumar',
      email: 'parken.vikas@gmail.com',
    })
      .then(() => {
        done();
      });
  });

  after((done) => {
    rp.Request.restore();
    done();
  });
});
