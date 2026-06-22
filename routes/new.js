const express = require('express');
const router = express.Router();
const messagesController = require("../controllers/messagesController.js");

router.post("/", messagesController.createMessagePost);


module.exports = router;

