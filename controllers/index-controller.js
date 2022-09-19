const getIndex = (req, res) => {
  res.render('index', {title: 'Online Shop'});   
}

module.exports = {
  getIndex
};