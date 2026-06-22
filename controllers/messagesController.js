const db = require("../db/queries");

async function getAllMessages(req, res) {
	const messages = await db.getAllMessages();
	res.render("indexView", { messages });
}
async function getAllUsers(req, res) {
	const users = await db.getAllUsers();
	res.render("usersView", { users });
}

async function createMessagePost(req, res) {
	const { newMessageName, newMessageText } = req.body;
	await db.insertMessage(newMessageName, newMessageText);
	res.redirect("/");
}

module.exports = {
	getAllMessages,
	getAllUsers,
	createMessagePost,
};

