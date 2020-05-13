const { signup } = require('./');

const userId = 1235;

describe('Engage Signup User', () => {
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
});
