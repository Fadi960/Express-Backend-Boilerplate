const prisma = require('../config/database');
const bcrypt = require('bcryptjs');
const ApiError = require('../utils/ApiError');

exports.createUser = async (data) => {
  const hashed = await bcrypt.hash(data.password, 10);
  try {
    return await prisma.user.create({ data: { ...data, password: hashed } });
  } catch (e) {
    if (e.code === 'P2002') throw new ApiError(409, 'Email already exists');
    throw e;
  }
};

exports.getAllUsers = () => prisma.user.findMany();
// add update/delete as needed