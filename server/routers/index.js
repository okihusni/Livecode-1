const router = require('express').Router();
const usersRouter = require('./users');
const foodsRouter = require('./foods');
const { authentication } = require('../middlewares/auth');

router.get('/', (req, res) => {
  console.log('home');
})
router.use('/users', usersRouter);
router.use(authentication);
router.use('/foods', foodsRouter);

module.exports = router;