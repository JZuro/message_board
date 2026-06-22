const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
	host: process.env.PG_HOST,
	user: process.env.PG_USER,
	database: process.env.PG_NAME,
	password: process.env.PG_PASSWORD,
	port: Number(process.env.PG_PORT),
});
