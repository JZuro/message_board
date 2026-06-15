const path = require("node:path");
const express = require("express");
const app = express();

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
	{ href: "/", text: "Home" },
	{ href: "/about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
	res.render("index", { links: links, users: users });
});

app.get("/about", (req, res) => {
	res.render("about", { links: links });
});

const PORT = 3001;
const server = app.listen(PORT, () => {
	console.log(`Testing Express Views - listening on port ${PORT}!`);
});

server.on("error", (error) => {
	throw error;
});

// ERROR HANDLING
app.use((req, res, next) => {
	throw new Error("OH NO!");
	// or next(new Error("OH NO!"));
});

app.use((err, req, res, next) => {
	console.error(err);
	// You will see an OH NO! in the page, with a status code of 500 that can be seen in the network tab of the dev tools
	res.status(500).send(err.message);
});


