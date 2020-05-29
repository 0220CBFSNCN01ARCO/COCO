var express = require('express');
var router = express.Router();
const productControllers = require('../controllers/productController.js')

/* GET users listing. */

router.get('/detail/:id', productControllers.detail )
  
router.get('/create', productControllers.add )

router.post('/create', productControllers.create)

module.exports = router;