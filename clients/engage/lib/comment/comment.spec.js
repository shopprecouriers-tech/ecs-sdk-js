const { create } = require('./');

const userId = 1235;

describe('Engage', () => {
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
});
