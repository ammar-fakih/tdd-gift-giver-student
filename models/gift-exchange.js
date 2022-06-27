const { BadRequestError } = require('../utils/errors');

let GiftExchange = class {
  static pairs(names) {
    if (names.length % 2 === 1) {
      throw new BadRequestError('Names array must be even');
    }
    let newArray = [];
    while (names.length > 0) {
      let ind1 = Math.floor(Math.random() * names.length);
      let num1 = names[ind1];
      names.splice(ind1, 1);
      let ind2 = Math.floor(Math.random() * names.length);
      let num2 = names[ind2];
      names.splice(ind2, 1);
      newArray.push([num1, num2]);
    }
    return newArray;
  }

  static traditional(names) {
    let newArray = [];
    let firstIndex = Math.floor(Math.random() * names.length);
    let firstName = names[firstIndex];
    let lastChosen = firstName;
    names.splice(firstIndex, 1);

    while (names.length > 0) {
      let newInd = Math.floor(Math.random() * names.length);
      let newChosen = names[newInd];
      newArray.push(`${lastChosen} is giving a gift to ${newChosen}`);

      lastChosen = newChosen;
      names.splice(newInd, 1);
    }

    newArray.push(`${lastChosen} is giving a gift to ${firstName}`);
    return newArray;
  }
};

module.exports = GiftExchange;


// const names = ['me', 'you', 'them', 'us', 'her', 'him', 'they', "y'all"];
// console.log(GiftExchange.pairs(names));

// const names2 = ["me", "you", "them", "us", "her", "him", "they", "y'all"]
// console.log(GiftExchange.traditional(names2))
