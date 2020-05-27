var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController.js')

/* GET users listing. */
router.get('/', usersController.login);

router.get('/register', usersController.register);

router.get('/bag', usersController.bag);


module.exports = router;
