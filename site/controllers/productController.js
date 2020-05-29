const fs = require ('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

let productController = {
    "detail" : function(req,res){

        res.render("productDetail");
    },
    "add" : function(req,res){
        res.render("productAdd");
    },
    "create": function(req,res){
        res.send("funciona")
    },
    "productList": function(req,res){
        //console.log(products) para ver el listado

        res.render("productList", { productsList: products });
    }
};

module.exports = productController;