const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const messagesController = require("../controllers/messagesController.js");

router.post(
	"/",
	body("newMessageName")
		.trim()
		.notEmpty()
		.withMessage("Name is required")
		.isLength({ max: 255 })
		.withMessage("Name must be 255 characters or fewer"),
	body("newMessageText")
		.trim()
		.notEmpty()
		.withMessage("Message is required")
		.isLength({ max: 255 })
		.withMessage("Message must be 255 characters or fewer"),
	messagesController.createMessagePost
);


module.exports = router;

