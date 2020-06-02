var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController.js')
const multer = require('multer');
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/users');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()  + path.extname(file.originalname));
    }
  });

/* GET users listing. */
router.get('/', usersController.login);

router.get('/register', usersController.register);

//router.post('/register',upload.any() , usersController.Sendregister);

router.get('/bag', usersController.bag);


module.exports = router;
