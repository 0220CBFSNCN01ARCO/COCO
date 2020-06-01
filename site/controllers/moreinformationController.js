let moreinformationController = {
    "retailers" : function(req,res){
        res.render("retailers");
    } ,
    "story" : function(req,res){
        res.render("story");
    }, 
    "delivery" : function(req,res){
        res.render("delivery");
    },

};


module.exports = moreinformationController;