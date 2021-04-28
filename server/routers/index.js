const router = require('express').Router();
const usersRouter = require('./users');
const foodsRouter = require('./foods');

router.get('/', (req, res) => {
  console.log('home');
})
router.use('/users', usersRouter);
router.use('/foods', foodsRouter);

module.exports = router;