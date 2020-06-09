const fs = require ('fs');
const path = require('path');



function cookieAuthMiddleware(req,res,next){

    const usersPath = path.join(__dirname, '../data/users.json');
    const usersList = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));


    if((req.cookies.remember != undefined) &&
         (req.session.usurioLogueado == undefined)){
            let users;
            if (usersList == ""){
                users = [];  
            }else{
                users = usersList
            }

            //buscamos el usuario que esta intentando loguearse
            for (let i = 0 ; i < users.length; i++){
                if (users[i].email == req.cookies.remember){
                        console.log(users[i])
                        let usuarioAloguearse = users[i];

                        req.session.usurioLogueado = usuarioAloguearse
                        break;
                        
                }
            }
        }
        next();    
    }


module.exports = cookieAuthMiddleware;