const { expect } = require('chai');

const userService = require('./user.service');

describe('Inventory user create', () => {
  it('should create user', async () => {
    const user = await userService.create({
      solutation: 'Mr',
      first_name: 'Punith',
      last_name: 'HS',
      email: 'punith.hs90@gmail.com',
    });
    expect(user.id);
  });
});

