let productController = {
    "detail" : function(req,res){

        res.render("productDetail");
    },
    "add" : function(req,res){
        res.render("productAdd");
    },
    "create": function(req,res){
        res.send("funciona")
    }
};

module.exports = productController;