const express = require('express');
const router = express.Router();
const GiftExchange = require('../models/gift-exchange');
const { BadRequestError } = require('../utils/errors');

router.post('/pairs', (req, res, next) => {
  try {
    if (!req.body) {
      return next(new BadRequestError('No body'));
    }
    if (!req.body.names || !Array.isArray(req.body.names)) {
      return next(new BadRequestError('Names array is required in body'));
    }
    const response = GiftExchange.pairs(req.body.names);

    res.status(200).send(response);
  } catch (e) {
    return next(new BadRequestError(e));
  }
});

router.post('/traditional', (req, res, next) => {
  try {
    if (!req.body) {
      return next(new BadRequestError('No body'));
    }
    if (!req.body.names || req.body.names.length < 2) {
      return next(new BadRequestError('Names array is required in body'));
    }
    const response = GiftExchange.traditional(req.body.names);

    res.status(200).send(response);
  } catch (e) {
    return next(new BadRequestError(e));
  }
});

module.exports = router;
