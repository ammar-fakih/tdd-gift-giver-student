const express = require('express');
const router = express.Router();

const GiftExchange = require('../models/gift-exchange');
const { BadRequestError } = require('../utils/errors');

router.get('/', (req, res, next) => {
  try {
    res.status(200).send(GiftExchange.quiz());
  } catch (e) {
    return next(new BadRequestError(e));
  }
});

router.post('/', (req, res, next) => {
  try {
    res.status(200).send(GiftExchange.quiz());
  } catch (e) {
    return next(new BadRequestError(e));
  }
});
