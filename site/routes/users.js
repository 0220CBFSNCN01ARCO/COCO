var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController.js')
const multer = require('multer');
const path = require("path")
const { check , validationResult , body } = require("express-validator")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/users');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()  + path.extname(file.originalname));
    }
  });

const upload = multer({ storage: storage });

/* GET users listing. */
router.get('/', usersController.login);

router.get('/register', usersController.register);

router.post('/register', upload.any(), [
    check("Firs_name").isLength(),
    check("Last_name").isLength(),
    check("Email").isEmail(),
    check("Password").isLength({min: 6}).withMessage("The password must contain 6 characters"),
    check("password repeat").isLength()
], usersController.create);

router.get('/bag', usersController.bag);


module.exports = router;
