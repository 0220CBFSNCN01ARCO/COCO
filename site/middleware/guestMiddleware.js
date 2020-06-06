function guestMiddleware(req,res,next){

    if(typeof(req.session.usurioLogueado) == "undefined"){
        next();
    }else{
        res.render("guest")

    }
}

module.exports = guestMiddleware;