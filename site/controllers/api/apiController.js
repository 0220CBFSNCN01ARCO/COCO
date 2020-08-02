var express = require('express');
const fs = require ('fs');
const path = require('path');
let db = require("../../database/models");
const {Op}  = require("sequelize");
const { check , validationResult , body } = require("express-validator")

const productsPath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

let productController = {

    
    "productList": function(req,res){

        db.Product.findAll({
            include: [{association: "brand"}, {association: "colour"},{association: "offer"},{association: "sizes"}],
        })
            .then(function(products){

                for (let i = 0; i < products.length; i++){
                    products[i].setDataValue("endpoint", "/api/product/" + products[i].id)
                }


                let respuesta = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: "/api/product",

                    },
                    data: products
                    
                };
                res.json(respuesta);
            })
        
        /*res.render("shop" , { productsList: products });*/
    },
    "find" : function(req,res){
      
        const ID = req.params.id;

        db.Product.findOne({
            include: [{association: "brand"}, {association: "colour"},{association: "offer"}, {association: "sizes"}, {association: "categoryProduct"}],
            where:{
                id: ID
                
            }
            }).then((resultado) => {
                res.json(resultado)

            })
    },
};

module.exports = productController;