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
                res.render("shop", { productsList: products });
            })
        
        /*res.render("shop" , { productsList: products });*/
    },
};

module.exports = productController;