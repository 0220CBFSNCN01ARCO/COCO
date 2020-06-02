const fs = require ('fs');
const path = require('path');
const bcrypt = require('bcrypt')
const { check , validationResult , body } = require("express-validator")

const productsPath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

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

        if (errors.isEmpty()){
            let newUser = {
                firs_name : req.body.Firs_name,
                last_name : req.body.Last_name,
                email : req.body.Email,
                password : bcrypt.hashSync(req.body.Password,10)
            }
            res.send(newUser)
        }else{
            res.send("ERROR")
        }


    }

};

module.exports = usersController;