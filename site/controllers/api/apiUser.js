var express = require('express');
const fs = require ('fs');
const path = require('path');
let db = require("../../database/models");
const {Op}  = require("sequelize");
const { check , validationResult , body } = require("express-validator")

const productsPath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

let productController = {

    
    "userList": function(req,res){

        db.User.findAll({
            include: [{association: "category"}]
        })
            .then(function(usuarios){

                for (let i = 0; i < usuarios.length; i++){
                    usuarios[i].setDataValue("endpoint", "/api/user/" + usuarios[i].id)
                }


                let respuesta = {
                    meta: {
                        status: 200,
                        total: usuarios.length,
                        url: "/api/user",

                    },
                    data: usuarios
                    
                };

                res.json(respuesta);
            })

        // JSON res.render("userList", { userList: usersList });
    },
    "find": function(req,res,next){

        const id = req.params.id;
        db.User.findOne({
        include: [{association: "category"}],
        where:{
            id: id
        }
        }).then((usuario) => {
            res.json(usuario);

        })
    }
};

module.exports = productController;