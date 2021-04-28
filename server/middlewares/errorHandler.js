const errorHandler = (err, req, res, next) => {
  let statusCode;
  let error = [];

  switch(err.name) {
    case 'login_failed':
      statusCode = 401;
      error.push('password or email wrong');
      break;
    default:
      statusCode = 500;
      err.push('internal server error');
      break;
  }
  res.status(statusCode).json({error});
}

module.exports = errorHandler;