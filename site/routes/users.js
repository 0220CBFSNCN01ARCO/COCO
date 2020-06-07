var express = require('express');
var fs = require('fs');
var router = express.Router();
const usersController = require('../controllers/usersController.js')
const multer = require('multer');
const path = require("path");
const { check , validationResult , body } = require("express-validator");
var guestMiddleware = require("../middleware/guestMiddleware")

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

router.post('/',[
    check("email").isEmail().withMessage("Enter a valid email address"),
    check("password").isLength({min : 6}).withMessage("The password must contain 6 characters")
] ,usersController.processLogin);

router.get('/register', guestMiddleware, usersController.register);

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
    check("Password").custom(function(value,{req, loc ,path}){
        if (value != req.body.passwordRepeat){
            return false
        }else{
            return true
        }
    }).withMessage("Passwords entered are not the same"),
    check("passwordRepeat").isLength({min: 6})
], usersController.create);

router.get('/bag', usersController.bag);

router.get('/profile/:id', usersController.profile);

router.get('/profile/edit/:id', usersController.userEdit);

router.get('/list', usersController.userList);

router.get("/check", function(req,res){
    if(typeof(req.session.usurioLogueado) == "undefined"){
        res.send("no estas logueado");
    }else{
        res.send("el usuario logueado es " + req.session.usurioLogueado.email)
    }
})


module.exports = router;
