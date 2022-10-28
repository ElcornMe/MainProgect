const models = require('../database/models');

// 0. User Client
// 1. Product Manager
// 2. Order Manager
// 3. Director
// 4. Admin

function permit(...permittedRoles) {
  
  return (req, res, next) => {

    if (permittedRoles.includes(req.cookies.role)) {
      next(); 
    } else {
      res.status(403).json({message: "Forbidden"}); 
    }
  };

};


module.exports = permit;