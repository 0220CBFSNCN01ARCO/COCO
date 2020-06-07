function authMiddleware(req,res,next){

    if(typeof(req.session.usurioLogueado) != "undefined"){
        next();
    }else{
        res.render("auth")

    }
}

module.exports = authMiddleware;