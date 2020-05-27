var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController.js')

/* GET users listing. */
router.get('/', usersController.login);

router.get('/register', usersController.register);

<<<<<<< HEAD
router.get('/bag', usersController.bag);


=======
>>>>>>> 225312637bdbae0ad6a3520b071199be2024dca2
module.exports = router;
