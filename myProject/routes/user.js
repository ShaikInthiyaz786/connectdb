const express = require('express');
const passport = require('../middlewares/passport');
const { getUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/users', passport.authenticate('jwt', { session: false }), getUsers);

module.exports = router;
