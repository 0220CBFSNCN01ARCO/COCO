function guestMiddleware(req,res,next){

    if(typeof(req.session.usurioLogueado) == "undefined"){
        next();
    }else{
        res.send("es solo para invitados")

    }
}

module.exports = guestMiddleware;