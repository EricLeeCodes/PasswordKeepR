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


const args = process.argv.slice(2);
const command = args[0]; //Work with terminal for SQL commands


// INDEX - shows all items
// Show from search
// Shows by category (Dropdown)
// Create
// Update
// Delete
switch (command) {
  case 'index':
    pool
      .query('SELECT * FROM accounts;')
      .then((result) => {
        const allAccounts = result.rows;
        console.log(allAccounts);
        pool.end();
      });
    break;

  default: console.log("Hello Testing");
}