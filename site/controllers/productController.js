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
    },

    "view": function(req,res,next){
        const id = req.params.id;
        const productID = products.find( products => {
            return products.id == id;
        });
        res.render("adminView", { productID: productID, ID:id});
        console.log(id)
    },

    "delete": function(req,res,next){
        let productID = req.params.id;

        let productsIdDelete = products.filter(product =>{
            return product.id != productID;
        })
        let newProductList = JSON.stringify(productsIdDelete,'utf-8');
        
        fs.writeFileSync(productsPath, newProductList);

        res.redirect("/product")
    }       
        
    
};

module.exports = productController;