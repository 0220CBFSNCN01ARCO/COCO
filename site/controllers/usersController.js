var express = require('express');
const fs = require ('fs');
const path = require('path');
const bcrypt = require('bcrypt')
const { check , validationResult , body } = require("express-validator")

const usersPath = path.join(__dirname, '../data/users.json');
const usersList = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

let usersController = {

    "login" : function(req,res){
        let userLogin = req.session.usurioLogueado
        if(userLogin == undefined){
            res.render("login");
        }else{
            res.render("profile",{userID : userLogin });
        }
    },
    
    "processLogin" : function(req,res,next){
        let errors = validationResult(req);
        
        if (errors.isEmpty()) {
            //Validamos que dentro del JSON se encuentren usuarios de no ser asi crea un array nuevo
            let users;
            if (usersList == ""){
                users = [];  
            }else{
                users = usersList
            }



            //buscamos el usuario que esta intentando loguearse
            for (let i = 0 ; i < users.length; i++){
                if (users[i].email == req.body.email){
                    if(bcrypt.compareSync(req.body.password, users[i].password)){
                        let usuarioAloguearse = users[i];

                        req.session.usurioLogueado = usuarioAloguearse
                        res.redirect('users/profile/:id')

                        break;
                    }
                }
            }

            if (typeof(usuarioAloguearse) == "undefined"){
                return res.render("login", {errors : [
                    {msg: "Invalid credentials"}
                ]})
            }
        }else{
            return res.render("login", { errors : errors.errors}) ;
        }
    },
    "profile" : function(req,res){
        const ID = req.session.usurioLogueado.id;
        const userID = usersList.find( usersList => {
            return usersList.id == ID;
        })
        res.render("profile",{userID:userID});
  
    },
    "userEdit" : function(req,res){
        const ID = req.session.usurioLogueado.id;
        const userID = usersList.find( usersList => {
            return usersList.id == ID;
        })
        res.render("profileEdit", {userID:userID, ID:ID})
  
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
                first_name : req.body.Firs_name,
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