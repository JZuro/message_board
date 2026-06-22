const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messagesController.js");

router.get("/", messagesController.getAllMessages);

module.exports = router;
