let policyController = {
    "policy" : function(req,res){
        res.render("privacyPolicy");
    } ,
    "Terms" : function(req,res){
        res.render("TermsAndConditions");
    }


};

module.exports = policyController;