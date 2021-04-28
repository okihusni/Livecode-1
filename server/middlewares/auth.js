const { User, Food } = require('../models');

const authentication = (req, res, next) => {
  if(!req.headers.access_token) return next({ name: 'missing_access_token'});

  try{
    const decoded = jwt.verify(req.headers.access_token, process.env.JWT_PRIVATE_KEY);
    req.userId = decoded.id;
  }
  catch(err) {
    return next({ name: 'login_failed' })
  }

  User.findByPk(req.userId)
  .then(user => {
    if(!user) throw { name: 'login_fail' };
    next();
  })
  .catch(err => {
    next(err)
  })
}

const authorization = (req, res, next) => {

}

module.exports = { authentication, authorization };