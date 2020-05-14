const delhivery = require('../../conn/delhivery');

exports.createOrder = async (data) => {
  if (!data) {
    return Promise.reject({
      code: 400,
      message: 'Pass payload{}  argument to createOrder method',
    });
  }

  const shipment = await delhivery.createOrder(data);

  return shipment;
};
