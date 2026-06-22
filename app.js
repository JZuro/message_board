const { loadEnvFile } = require("node:process");
// Must run before the routers below are required: they pull in db/pool.js,
// which reads process.env to build the connection pool at require-time.
// No .env file exists in production (Railway injects vars directly), so ignore it if missing.
try {
	loadEnvFile();
} catch (err) {
	if (err.code !== "ENOENT") throw err;
}

const createError = require("http-errors");
const express = require("express");
const path = require("path");

const app = express();
const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");
const usersRouter = require("./routes/users");


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/users", usersRouter);

app.use((req, res, next) => {
	next(createError(404));
});

app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	res.status(err.status || 500);
	res.render("errorView");
});

module.exports = app;
