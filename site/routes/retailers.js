var express = require('express');
var router = express.Router();
const moreinformationController = require('../controllers/moreinformationController.js')



/* GET home page. */
  router.get('/', moreinformationController.retailers);
  router.get('/story', moreinformationController.story);
  router.get('/delivery', moreinformationController.delivery);
  

  


module.exports = router;