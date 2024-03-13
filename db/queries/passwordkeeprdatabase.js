const db = require('../connection');

const getAllAccounts = () => {
  return db.query('SELECT * FROM accounts JOIN category ON category.id = category_id;')
    .then((result) => {
      return result.rows;
    });
};


const getAccountsByCategory = (id) => {
  return client.query('SELECT * FROM accounts JOIN category ON category.id = category_id WHERE category.id = $1;', [id])
    .then((result) => {
      return result.rows[0];
    });
};

const addAccount = (account) => {
  return pool
    .query('INSERT INTO accounts (email, password, site_name, site_url, category_id, user_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *', [account.email, account.password, account.site_name, account.site_url, account.category_id, account.user_id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};


const editAccount = () => {
  return pool
    .query('UPDATE accounts SET email = $1, password = $2, user_id = $3', [account.email, account.password, account.user_id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });

};


const deleteAccount = (id) => {
  return pool
    .query('DELETE FROM accounts WHERE account.id = $1', [id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getAllAccounts, getAccountsByCategory, addAccount, editAccount, deleteAccount };
