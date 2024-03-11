const pg = require('pg');
const dotenv = require('dotenv');
const Pool = pg.Pool;
dotenv.config();


const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
};

const pool = new Pool(config);
pool.connect();

module.exports = pool;