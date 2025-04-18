const responseHandler = (res, statusCode, data = null, message = '') => {
    res.status(statusCode).json({ status: statusCode < 400 ? 'success' : 'error', message, data });
  };
  module.exports = responseHandler;