const db = require('../connection');

const getAllAccounts = () => {
  return db.query('SELECT * FROM accounts JOIN sites ON sites.id = site_id JOIN category ON category.id = category_id;')
    .then((result) => {
        const allAccounts = result.rows;
        console.log(allAccounts);
        pool.end();
      });
};


const getAccountsByCategory = (id) => {
  return client.query('SELECT * FROM accounts JOIN sites ON sites.id = site_id JOIN category ON category.id = category_id WHERE category.id = $1;', [id])
  .then((result) => {
    return result.rows[0]; 
  });
};



module.exports = { getAllAccounts, getAccountsByCategory };
