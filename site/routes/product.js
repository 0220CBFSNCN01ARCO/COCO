var express = require('express');
var router = express.Router();
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

router.post('/create', upload.any(), productControllers.create);

router.get('/admin/view/:id', productControllers.view);
    
router.get('/', productControllers.productList);

router.get('/:id', productControllers.productEdit);

router.put("/:id", upload.any(), productControllers.Edit)

router.delete("/admin/view/delete/:id", productControllers.delete)

router.get('/view/shop', productControllers.shop)

module.exports = router;