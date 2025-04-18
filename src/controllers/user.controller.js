const userService = require('../services/user.service');
const responseHandler = require('../utils/responseHandler');

exports.register = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    responseHandler(res, 201, { id: user.id, email: user.email }, 'User created');
  } catch (err) { next(err); }
};

exports.list = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    responseHandler(res, 200, users, 'Users fetched');
  } catch (err) { next(err); }
};