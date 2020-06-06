function authMiddleware(req,res,next){

    if(typeof(req.session.usurioLogueado) != "undefined"){
        next();
    }else{
        res.send("es solo para USUARIOS")

    }
}

module.exports = authMiddleware;