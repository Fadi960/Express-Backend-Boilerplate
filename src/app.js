require('./config');
const express = require('express');
const cors    = require('cors');
const morgan  = require('morgan');
const helmet  = require('helmet');

const userRoutes  = require('./routes/user.route');
const notFound    = require('./middlewares/notFound');
const errorHandler= require('./middlewares/errorHandlers');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;