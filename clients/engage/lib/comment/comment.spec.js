const rp = require('request-promise-native');

const { create } = require('./');

const userId = 1235;

describe('Engage', () => {
  before(() => {
    sinon.stub(rp, 'Request').resolves({ id: 1 });
  });

  it('should store the comment in engage', (done) => {
    create({
      object_id: 1,
      user_id: userId,
      state_id: 1,
      comments: 'Lead Completed',
    }, 'leads')
      .then(() => {
        done();
      });
  });

  after((done) => {
    rp.Request.restore();
    done();
  });
});
