const models = require('../database/models');

const Authorization = models.Authorization;


async function checkColumnInTable(userId, token) {

await Authorization.findOne({where: {userId: userId}})
  .then(res => {
    if(res !== null) {
      Authorization.update({token: token}, {
        where:
        {userId: userId}
      })
      .then((res) => {
        return console.log("updated token");
      })
    }else{
      Authorization.create({
        token: token,
        userId: userId
      })
      .then(res=>{
        return console.log("created new token");
      });
    };
  })
  .catch(err => { console.log(err) })
};

module.exports = checkColumnInTable;


