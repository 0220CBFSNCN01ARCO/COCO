var express = require('express');
var router = express.Router();
const moreinformationController = require('../controllers/moreinformationController.js')



/* GET home page. */
  router.get('/', moreinformationController.retailers);
  router.get('/story', moreinformationController.story);

  


module.exports = router;