/* eslint-disable no-undef */
require('jest');

const Authorization = require('../../database/models/authorization');

async function checkColumnInTable(userId, token) {
  let mainWord;
  await Authorization.findOne({ where: { userId } })
    .then((res) => {
      if (res !== null) {
        Authorization.update({ token }, {
          where:
        { userId },
        })
          .then((result) => {
            console.log('updated token', `${result}`);
            mainWord = result;
            return mainWord;
          });
      } else {
        Authorization.create({
          token,
          userId,
        })
          .then((result) => {
            console.log('created new token', `${result}`);
            mainWord = result;
            return mainWord;
          });
      }
    })
    .catch((err) => {
      console.log(`${err} error`);
      mainWord = false;
      return mainWord;
    });
  return mainWord;
}

module.exports = {
  checkColumnInTable,
};
