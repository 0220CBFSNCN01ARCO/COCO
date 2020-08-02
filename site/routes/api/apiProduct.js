var express = require('express');
var router = express.Router();
const productAPIController = require('../../controllers/api/apiController.js');

router.get("/", productAPIController.productList);


module.exports = router;