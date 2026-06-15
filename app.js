var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var newRouter = require('./routes/new');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/users', usersRouter);




// // error handling
// app.use((req, res, next) => {
//   throw new Error("OH NO!");
// 	// or next(new Error("OH NO!"));
// });

// app.use((err, req, res, next) => {
// 	console.error(err);
// 	// You will see an OH NO! in the page, with a status code of 500 that can be seen in the network tab of the dev tools
// 	res.status(500).send(err.message);
// });

const PORT = 3001;
const server = app.listen(PORT, () => {
  console.log(`Testing Express Views - listening on port ${PORT}!`);
});

server.on("error", (error) => {
  throw error;
});

module.exports = app;
