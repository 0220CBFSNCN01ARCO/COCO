var express = require('express');
var router = express.Router();
const productControllers = require('../controllers/productController.js')

/* GET users listing. */

router.get('/', productControllers.detail )
  

  
router.get('/add', productControllers.add )

module.exports = router;