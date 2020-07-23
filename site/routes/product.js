var express = require('express');
var router = express.Router();
const { check , validationResult , body } = require("express-validator");
const productControllers = require('../controllers/productController.js')
const multer = require('multer');
const path = require("path")



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      
      cb(null, 'public/images/indumentaria');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()  + path.extname(file.originalname));
    },
    fileFilter: function (req, file, cb) {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Invalid Image'));
      }
    }
    
  });
  


const upload = multer({ storage: storage});
/* GET users listing. */


router.get("/view/search", productControllers.search);

router.get('/detail/:id', productControllers.detail );
  
router.get('/create', productControllers.add );

router.post('/create', upload.any(), [

    



        check("name").isLength({min : 5}).withMessage("The product name must contain 5 characters"),
        check("description").isLength({min : 20}).withMessage("The description name must contain 20 characters"),
        check("quantity").isNumeric(),
        check("price").isNumeric(),

        check("quantity").custom(function(value,{req, loc ,path}){
              if(value > 0){
                return true
              }else{
                return false
              }
        }).withMessage("The quantity must contain 1 product"),

        check("price").custom(function(value,{req, loc ,path}){
              if(value > 0){
                return true
              }else{
                return false
              }
        }).withMessage("The price has to be greater then 0"), 
      ] , productControllers.create);

router.get('/admin/view/:id', productControllers.view);
    
router.get('/', productControllers.productList);

router.get('/:id', productControllers.productEdit);

router.put("/:id", upload.any(), [

        check("name").isLength({min : 5}).withMessage("The product name must contain 5 characters"),
        check("description").isLength({min : 20}).withMessage("The description name must contain 20 characters"),
        check("quantity").isNumeric(),
        check("price").isNumeric(),

        check("quantity").custom(function(value,{req, loc ,path}){
              if(value > 0){
                return true
              }else{
                return false
              }
        }).withMessage("The quantity must contain 1 product"),

        check("price").custom(function(value,{req, loc ,path}){
              if(value > 0){
                return true
              }else{
                return false
              }
        }).withMessage("The price has to be greater then 0")

        ],productControllers.Edit)

router.delete("/admin/view/delete/:id", productControllers.delete)

router.get('/view/shop', productControllers.shop)

router.get('/view/sale', productControllers.sale)



module.exports = router;