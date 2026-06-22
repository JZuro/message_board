var express = require('express');
var router = express.Router();
const messagesController = require("../controllers/messagesController.js");

router.get("/", messagesController.getAllUsers);


module.exports = router;
