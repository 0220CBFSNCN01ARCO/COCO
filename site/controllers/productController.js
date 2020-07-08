const fs = require ('fs');
const path = require('path');
let db = require("../database/models");

const productsPath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

let productController = {

    "detail" : function(req,res){
      
        const ID = req.params.id;

        db.Product.findOne({
            include: [{association: "brand"}, {association: "colour"},{association: "offer"}, {association: "sizes"}, {association: "categoryProduct"}],
            where:{
                id: ID
                
            }
            }).then((resultado) => {
                res.render("productDetail",{productID:resultado});

            })



        /*const productID = products.find( products => {
            return products.id == ID;
        })
        res.render("productDetail",{productID:productID});*/
    },

    "add" : function(req,res){
        res.render("productAdd");
    },

    "create": function(req,res){

        
        let cont = products.length;
        let ID = cont + 1;

        let prod = {
            id: ID,
            name: req.body.name,
            description: req.body.description,
            image: req.files[0].filename,
            brand: req.body.brand,
            colour: req.body.colour,
            quantity: req.body.quantity,
            size: req.body.size,
            price: req.body.price,
            offer: req.body.offer,
            discount: req.body.discount,
            category: req.body.category
        }

        
        
        products.push(prod);
        fs.writeFileSync('data/products.json', JSON.stringify(products));

        res.redirect("/product")
        
    },
    
    "productEdit": function(req,res){
        const ID = req.params.id;

        db.Product.findOne({
            include: [{association: "brand"}, {association: "colour"},{association: "offer"}, {association: "sizes"}, {association: "categoryProduct"}],
            where:{
                id: ID
                
            }
            }).then((resultado) => {
                res.render("productEdit",{productToEdit:resultado, ID:ID});

            })





        /*const id = req.params.id;
        const productToEdit = products.find( products => {
            return products.id == id;
        });
        res.render("productEdit", { productToEdit: productToEdit, ID:id})*/
    },

    "Edit": function(req,res,next){
        const productId = req.params.id;

        products.map(product => {
            if(product.id ==  productId){
                product.name = req.body.name;
                product.description = req.body.description;
                product.brand = req.body.brand,
                product.colour = req.body.colour,
                product.quantity = req.body.quantity,
                product.size = req.body.size,
                product.price = req.body.price,
                product.offer = req.body.offer,
                product.discount = req.body.discount,
                product.category = req.body.category
        
        }
    })
        fs.writeFileSync('data/products.json', JSON.stringify(products));
        res.redirect("/product")


    
    },


    "productList": function(req,res){

        db.Product.findAll({
            include: [{association: "brand"}, {association: "colour"},{association: "offer"},{association: "sizes"}],
        })
            .then(function(products){
                res.render("productList", { productsList: products });
            })

        
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
        let ID = req.params.id;

        db.Product.destroy({
        where:{
            id: ID
            }
        })

        res.redirect("/product")

        /*
        let productID = req.params.id;

        let productsIdDelete = products.filter(product =>{
            return product.id != productID;
        })
        let newProductList = JSON.stringify(productsIdDelete,'utf-8');
        
        fs.writeFileSync(productsPath, newProductList);

        res.redirect("/product")
        */
    },
    "shop": function(req,res){

        db.Product.findAll({
            include: [{association: "brand"}, {association: "colour"},{association: "offer"},{association: "sizes"}],
        })
            .then(function(products){
                res.render("shop", { productsList: products });
            })
        
        /*res.render("shop" , { productsList: products });*/
    },
    "sale": function(req,res){

        db.Product.findAll({
            include: [{association: "brand"}, {association: "colour"},{association: "offer"},{association: "sizes"}],
        })
            .then(function(products){
                res.render("sale", { productsList: products});
            })
        
        
        
    }
};

module.exports = productController;