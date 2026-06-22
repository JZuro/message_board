const { loadEnvFile } = require("node:process");
// Must run before the routers below are required: they pull in db/pool.js,
// which reads process.env to build the connection pool at require-time.
loadEnvFile();

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



module.exports = app;
