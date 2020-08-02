var express = require('express');
var router = express.Router();
const userAPIController = require('../../controllers/api/apiUser.js');

router.get("/", userAPIController.userList);

router.get("/:id", userAPIController.find);



module.exports = router;