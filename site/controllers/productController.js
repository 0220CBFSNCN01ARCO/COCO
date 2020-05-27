let productController = {
    "detail" : function(req,res){
        res.render("detail");
    },
    "add" : function(req,res){
        res.render("add");
    }


};

module.exports = productController;