const express = require('express');
const router = express.Router();

let giftExchange = class {
  pairs(names) {
    if (names.length % 2 === 1) {
      throw 'Names must be even length';
    }
    let newArray = [];
    while (names.length > 0) {
      let ind1 = Math.floor(random() * names.length);
      let num1 = newArray[ind1];
      names.splice(ind1, 1);
      let ind2 = Math.floor(random() * names.length);
      let num2 = newArray[ind2];
      names.splice(ind2, 1);
      newArray.push([num1, num2]);
    }
    return newArray;
  }

  traditional(names) {
    let newArray = [];
    let firstName = names[Math.floor(randome() * names.length)];

    while (names.length > 0) {
      
    }
  }
};

router.post('/pairs', (req, res) => {
  console.log(req.body.names);
  res.status(200).send({ message: 'received pairs' });
});

router.post('/traditional', (req, res) => {
  // console.log(req.body.names);
  res.status(200).send({ message: 'received traditional' });
});

module.exports = router;
