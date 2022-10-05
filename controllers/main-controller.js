const getMain = (req, res) => {
  res.render('main', {title: 'Online Shop', name: 'User'});   
};

module.exports = {
  getMain
};