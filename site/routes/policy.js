var express = require('express');
var router = express.Router();
const policyController = require('../controllers/policyController.js')



/* GET home page. */
  router.get('/', policyController.policy);

  router.get('/Terms', policyController.Terms);


module.exports = router;

