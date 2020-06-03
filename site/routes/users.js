var express = require('express');
var fs = require('fs');
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
    body("Email").custom(function(value){
        
        let UsersJSON = path.join(__dirname, '../data/users.json');
        let usersList = JSON.parse(fs.readFileSync(UsersJSON, 'utf-8'));

            let users;
            if (UsersJSON = "") {
                users = []
            }else{
                users = usersList;
            }
        
        for(let i = 0; i < users.length; i++){
            if (users[i].email == value){
                return false
            }
        }
        return true

    }).withMessage("The email is already in use"),
    check("Password").isLength({min: 6}).withMessage("The password must contain 6 characters"),
    check("password repeat").isLength()
], usersController.create);

router.get('/bag', usersController.bag);


module.exports = router;
