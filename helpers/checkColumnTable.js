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
          .then(() => {
            console.log('updated token');
            return true;
          });
      } else {
        Authorization.create({
          token,
          userId,
        })
          .then(() => {
            console.log('created new token');
            return true;
          });
      }
    })
    .catch((err) => { console.log(err); });
}

module.exports = checkColumnInTable;
