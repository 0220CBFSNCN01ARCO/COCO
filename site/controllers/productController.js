var express = require('express');
const fs = require ('fs');
const path = require('path');
let db = require("../database/models");
const {Op}  = require("sequelize");
const { check , validationResult , body } = require("express-validator")

const productsPath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

let productController = {

    "search": function(req,res){
        res.render("search")
    },
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

    "create": async function(req,res){
        let errors = validationResult(req);
        console.log("CONTROLLER")
        

        let validacionImagen = req.files[0].mimetype
        console.log(validacionImagen)
        
        if(errors.isEmpty()){

            if (validacionImagen == "image/png" || validacionImagen == "image/jpg" || validacionImagen == "image/jpeg" || validacionImagen == "image/gif") {

                try{

                    let OfertResultado = 0

                    if (req.body.offer == "not") {
                        OfertResultado = 0
                    }else{
                        OfertResultado = 1
                    }

                    let offerts = await db.Offer.findOne({
                        where: {
                        [Op.and]  : [
                            { percentage: parseInt(req.body.discount)},
                            { has : OfertResultado }
                        ]
                        }
                    })


                    let size = await db.Size.findOne({
                        where: {
                        name: req.body.Size
                        }
                    })
                    let Brand = await db.Brand.findOne({
                        where: {
                        name: req.body.brand
                        }
                    })
                    let color = await db.Colour.findOne({
                        where: {
                        name: req.body.colour
                        }
                    })

                    let categoryProduct = await db.CategoryProduct.findOne({
                        where: {
                        [Op.and]  : [
                            { genre: req.body.genre},
                            { name : req.body.category }
                        ]
                        }
                    })

                    /*
                    console.log("COLOR " + color.id)
                    console.log("TALLE " + size.id)
                    console.log("MARCA " + Brand.id)
                    console.log("OFERTA " + OfertResultado)
                    console.log("CATEGORIA " + categoryProduct.id)
                    */

                    await db.Product.create({
                            
                        name: req.body.name,
                        idBrands: parseInt(Brand.id),
                        description: req.body.description,
                        image: req.files[0] ? req.files[0].filename : "none.jpg",
                        price: parseInt(req.body.price) ,
                        quantity: parseInt(req.body.quantity) ,
                        idColours: parseInt(color.id) ,
                        idOffers: parseInt(offerts.id),
                        idCategoriesProduct: parseInt(categoryProduct.id),
                        idSizes: parseInt(size.id) ,
                    })

                res.redirect("/product")
                
                }catch(error){
                    console.log(error)
                }
            }else{
                return res.render("productAdd", { errors : [{msg: "Invalid image"}] })
            }
        
        }else{
            console.log(errors)
            return res.render("productAdd", { errors : errors.errors })
        }
            
            /*let cont = products.length;
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

            res.redirect("/product")*/
            
    },
    
    "productEdit": function(req,res){
        const ID = req.params.id;
        

        

        db.Product.findOne({
            include: [{association: "brand"}, {association: "colour"},{association: "offer"}, {association: "sizes"}, {association: "categoryProduct"}],
            where:{
                id: ID
                
            }
            }).then((resultado) => {
                let oferta = 'not'
                
                if(resultado.offer.has != 0){
                   oferta = 'yes'
                } else { 
                    oferta = 'not'
                 } 
                res.render("productEdit",{productToEdit:resultado, ID:ID, oferta: oferta});

            })





        /*const id = req.params.id;
        const productToEdit = products.find( products => {
            return products.id == id;
        });
        res.render("productEdit", { productToEdit: productToEdit, ID:id})*/
    },

    "Edit": async function(req,res,next){

        let errors = validationResult(req);

        let imagenAnterior = await db.Product.findOne({
            where:{
                id : req.params.id
            }
        }).then((resultado) => {
            return resultado.image
        })

        let oferta = "not"
        const ID = req.params.id


        if(errors.isEmpty()){
            
            try{

                let OfertResultado = 0

                if (req.body.offer != "not") {
                    OfertResultado = 1
                }else{
                    OfertResultado = 0
                }


                if(OfertResultado != 0){
                    oferta = "yes"
                 } else { 
                     oferta = "not"
                  } 




                let offerts = await db.Offer.findOne({
                    where: {
                    [Op.and]  : [
                        { percentage: parseInt(req.body.discount)},
                        { has : parseInt(OfertResultado) }
                    ]
                    }
                })


                let size = await db.Size.findOne({
                    where: {
                    name: req.body.Size
                    }
                })
                let Brand = await db.Brand.findOne({
                    where: {
                    name: req.body.brand
                    }
                })
                let color = await db.Colour.findOne({
                    where: {
                    name: req.body.colour
                    }
                })

                let categoryProduct = await db.CategoryProduct.findOne({
                    where: {
                    [Op.and]  : [
                        { genre: req.body.genre},
                        { name : req.body.category }
                    ]
                    }
                })

                console.log("COLOR " + color.id)
                console.log("TALLE " + size.id)
                console.log("MARCA " + Brand.id)
                console.log("OFERTA " + offerts.id)
                console.log("CATEGORIA " + categoryProduct.id)
                console.log(req.files[0])
                console.log(imagenAnterior)
                
                

               
                if(req.files[0] == undefined){
                  
                    await db.Product.update({
                        
                        name: req.body.name,
                        idBrands: parseInt(Brand.id),
                        description: req.body.description,
                        price: parseInt(req.body.price) ,
                        quantity: parseInt(req.body.quantity) ,
                        idColours: parseInt(color.id) ,
                        idOffers: parseInt(offerts.id),
                        idCategoriesProduct: parseInt(categoryProduct.id),
                        idSizes: parseInt(size.id) ,
                    },{
                        where: {
                            id: ID
                        }
                    })
                    res.redirect("/product")
                }else{

                    if (req.files[0].mimetype == 'image/png' || req.files[0].mimetype == 'image/jpg' || req.files[0].mimetype == 'image/jpeg' || req.files[0].mimetype == 'image/gif') {

                    await db.Product.update({
                        
                        name: req.body.name,
                        idBrands: parseInt(Brand.id),
                        description: req.body.description,
                        image: req.files[0].filename,
                        price: parseInt(req.body.price) ,
                        quantity: parseInt(req.body.quantity) ,
                        idColours: parseInt(color.id) ,
                        idOffers: parseInt(offerts.id),
                        idCategoriesProduct: parseInt(categoryProduct.id),
                        idSizes: parseInt(size.id) ,
                    },{
                        where: {
                            id: ID
                        }
                    })

                    res.redirect("/product")

                }else{
                    console.log(req.files)
                    console.log("ENTRE ACA!!!")
                    db.Product.findOne({
                    include: [{association: "brand"}, {association: "colour"},{association: "offer"}, {association: "sizes"}, {association: "categoryProduct"}],
                    where:{
                        id: ID
                        
                    }
                    }).then((resultado) => {
                        let oferta = 'not'
                        
                        if(resultado.offer.has != 0){
                           oferta = 'yes'
                        } else { 
                            oferta = 'not'
                         } 
                         res.render("productEdit",{productToEdit:resultado, errors : [{msg: "Invalid image"}] ,ID:ID, oferta: oferta});
        
                    })
                        
                }

                    
                }
        
            
            }catch(error){
                console.log(error)
            }
        
        }else{
            
            console.log(errors)


            db.Product.findOne({
                include: [{association: "brand"}, {association: "colour"},{association: "offer"}, {association: "sizes"}, {association: "categoryProduct"}],
                where:{
                    id: ID
                    
                }
                }).then((resultado) => {
                    let oferta = 'not'
                    
                    if(resultado.offer.has != 0){
                       oferta = 'yes'
                    } else { 
                        oferta = 'not'
                     } 
                    res.render("productEdit",{productToEdit:resultado, errors : errors.errors ,ID:ID, oferta: oferta});
    
                })
      
        }


        /*const productId = req.params.id;

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
        res.redirect("/product")*/


    
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
        const ID = req.params.id;
        db.Product.findOne({
            include: [{association: "brand"}, {association: "colour"},{association: "offer"}, {association: "sizes"}, {association: "categoryProduct"}],
            where:{
                id: ID
                
            }
            }).then((resultado) => {
                res.render("adminView",{productID:resultado, ID: ID});
                console.log(id)
            })



        /*const productID = products.find( products => {
            return products.id == id;
        });
        res.render("adminView", { productID: productID, ID:id});
        console.log(id)*/
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
        
        
        
    },
    
};

module.exports = productController;