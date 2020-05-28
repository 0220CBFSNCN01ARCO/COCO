let productController = {
    "detail" : function(req,res){
        res.render("productDetail");
    },
    "add" : function(req,res){
        res.render("productAdd");
    }
};

module.exports = productController;