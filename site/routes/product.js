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
    }
  });

const upload = multer({ storage: storage });
/* GET users listing. */

router.get('/detail/:id', productControllers.detail );
  
router.get('/create', productControllers.add );

router.post('/create', upload.any(), [

        check("name").isLength({min : 5}).withMessage("The product name must contain 5 characters"),
        check("description").isLength({min : 20}).withMessage("The description name must contain 20 characters"),
        check("quantity").isNumeric({min : 1}).withMessage("The quantity must contrener 1 product"),
        check("price").isNumeric({min : 1}).withMessage("The price has to be greater then 0")
        ] , productControllers.create);

router.get('/admin/view/:id', productControllers.view);
    
router.get('/', productControllers.productList);

router.get('/:id', productControllers.productEdit);

router.put("/:id", upload.any(), [

  check("name").isLength({min : 5}).withMessage("The product name must contain 5 characters"),
  check("description").isLength({min : 20}).withMessage("The description name must contain 20 characters"),
  check("quantity").isNumeric({min : 1}).withMessage("The quantity must contrener 1 product"),
  check("price").isNumeric({min : 1}).withMessage("The price has to be greater then 0")
  ] ,productControllers.Edit)

router.delete("/admin/view/delete/:id", productControllers.delete)

router.get('/view/shop', productControllers.shop)

router.get('/view/sale', productControllers.sale)

module.exports = router;