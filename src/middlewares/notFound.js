const ApiError = require('../utils/ApiError');
module.exports = (req, res, next) => next(new ApiError(404, `Not Found - ${req.originalUrl}`));