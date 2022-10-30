const models = require('../database/models');

const { Authorization } = models;

async function checkColumnInTable(userId, token) {
  await Authorization.findOne({ where: { userId } })
    .then((res) => {
      if (res !== null) {
        Authorization.update({ token }, {
          where:
        { userId },
        })
          .then((res) => console.log('updated token'));
      } else {
        Authorization.create({
          token,
          userId,
        })
          .then((res) => console.log('created new token'));
      }
    })
    .catch((err) => { console.log(err); });
}

module.exports = checkColumnInTable;
