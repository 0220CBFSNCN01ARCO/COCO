var express = require('express');
var router = express.Router();
const contactController = require('../controllers/contactController.js')


  router.get('/', contactController.contact);


module.exports = router;
