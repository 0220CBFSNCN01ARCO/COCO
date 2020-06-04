const fs = require ('fs');
const path = require('path');
const bcrypt = require('bcrypt')
const { check , validationResult , body } = require("express-validator")

const usersPath = path.join(__dirname, '../data/users.json');
const usersList = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

let usersController = {

    "login" : function(req,res){
        res.render('login');
    },
    "register" : function(req,res){
        res.render('register');
    } ,
    "bag" : function(req,res){
        res.render('productBag');
    },
    "create" : function(req,res,next){
        let errors = validationResult(req);

        let cont = usersList.length;
        let ID = cont + 1;

        if (errors.isEmpty()){
            let newUser = {
                id : ID,
                firs_name : req.body.Firs_name,
                last_name : req.body.Last_name,
                email : req.body.Email,
                password : bcrypt.hashSync(req.body.Password,10),
                avatar : req.files[0] ? req.files[0].filename : '',
                category : false
            }
            usersList.push(newUser);
            fs.writeFileSync('data/users.json', JSON.stringify(usersList));
    
            res.redirect("/users")
        }else{
            return res.render("register", { errors : errors.errors})
        }
    }

};

module.exports = usersController;