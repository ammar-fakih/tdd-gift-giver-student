const express = require('express');
const morgan = require('morgan');

const giftExchange = require('./routes/gift-exchange');

morgan('tiny');
express.json();
const app = express();

app.get('/', (req, res) => {
  res.status(200).send({ "ping": "pong" });
});

app.use('/gift-exchange', giftExchange);

module.exports = app;
