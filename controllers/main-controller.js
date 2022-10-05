const getMain = (req, res) => {
  res.render('main', {title: 'Online Shop'});   
};

module.exports = {
  getMain
};