const { validationResult } = require("express-validator");
const createError = require("http-errors");
const db = require("../db/queries");

async function getAllMessages(req, res, next) {
	try {
		const messages = await db.getAllMessages();
		res.render("indexView", { messages });
	} catch (err) {
		next(err);
	}
}
async function getAllUsers(req, res, next) {
	try {
		const users = await db.getAllUsers();
		res.render("usersView", { users });
	} catch (err) {
		next(err);
	}
}

async function createMessagePost(req, res, next) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return next(createError(400, errors.array().map((e) => e.msg).join(", ")));
	}

	try {
		const { newMessageName, newMessageText } = req.body;
		await db.insertMessage(newMessageName, newMessageText);
		res.redirect("/");
	} catch (err) {
		next(err);
	}
}

module.exports = {
	getAllMessages,
	getAllUsers,
	createMessagePost,
};

