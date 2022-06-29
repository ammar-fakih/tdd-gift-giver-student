const express = require('express');
const morgan = require('morgan');

const giftExchange = require('./routes/gift-exchange');
const { NotFoundError } = require('./utils/errors');

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.status(200).send({ ping: 'pong' });
});

app.use('/gift-exchange', giftExchange);

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((error, req, res, next) => {
  let status = error.status || 500;
  let message = error.message || 'Something went wrong in the application';

  return res
    .status(status)
    .json({ error: { status: status, message: message } });
});

module.exports = app;
