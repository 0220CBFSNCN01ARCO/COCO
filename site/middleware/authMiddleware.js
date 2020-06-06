function authMiddleware(req,res,next){

    if(typeof(req.session.usurioLogueado) != "undefined"){
        next();
    }else{
        res.send("auth")

    }
}

module.exports = authMiddleware;