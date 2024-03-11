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
      .query('SELECT * FROM accounts JOIN sites ON sites.id = site_id JOIN category ON category.id = category_id;')
      .then((result) => {
        const allAccounts = result.rows;
        console.log(allAccounts);
        pool.end();
      });
    break;

  case 'finance':
    pool
      .query('SELECT * FROM accounts JOIN sites ON sites.id = site_id JOIN category ON category.id = category_id WHERE category.id = 1;')
      .then((result) => {
        const allAccounts = result.rows;
        console.log(allAccounts);
        pool.end();
      });
    break;

  case 'social':
    pool
      .query('SELECT * FROM accounts JOIN sites ON sites.id = site_id JOIN category ON category.id = category_id WHERE category.id = 2;')
      .then((result) => {
        const allAccounts = result.rows;
        console.log(allAccounts);
        pool.end();
      });
    break;

  case 'work':
    pool
      .query('SELECT * FROM accounts JOIN sites ON sites.id = site_id JOIN category ON category.id = category_id WHERE category.id = 3;')
      .then((result) => {
        const allAccounts = result.rows;
        console.log(allAccounts);
        pool.end();
      });
    break;

  case 'entertainment':
    pool
      .query('SELECT * FROM accounts JOIN sites ON sites.id = site_id JOIN category ON category.id = category_id WHERE category.id = 4;')
      .then((result) => {
        const allAccounts = result.rows;
        console.log(allAccounts);
        pool.end();
      });
    break;

  case 'education':
    pool
      .query('SELECT * FROM accounts JOIN sites ON sites.id = site_id JOIN category ON category.id = category_id WHERE category.id = 5;')
      .then((result) => {
        const allAccounts = result.rows;
        console.log(allAccounts);
        pool.end();
      });
    break;

  case 'create':
    pool
      .query('INSERT INTO accounts (email, password, category_id, user_id, site_id) VALUES($1, $2, $3, $4, $5)', [email, password, category_id, user_id, site_id]);



  default: console.log("Hello Testing");
}