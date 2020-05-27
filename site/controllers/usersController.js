let usersController = {
    login : function(req,res){
        res.render('login');
    },
    register : function(req,res){
        res.render('register');
    } ,
    bag : function(req,res){
        res.render('productBag');
    }

};

module.exports = usersController;