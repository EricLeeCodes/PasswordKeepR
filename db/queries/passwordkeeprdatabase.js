const db = require('../connection');

const getAllAccounts = () => {
  return db
    .query('SELECT accounts.id, email, password, site_name, site_url, category_id, user_id, category_name FROM accounts JOIN category ON category.id = category_id ORDER BY accounts.id DESC;')
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};


const getAccountsByCategory = (id) => {
  return db
    .query('SELECT accounts.id, email, password, site_name, site_url, category_id, user_id, category_name FROM accounts JOIN category ON category.id = category_id WHERE category.id = $1;', [id])
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getIndividualAccount = (id) => {
  return db
    .query('SELECT * FROM accounts WHERE id = $1', [id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};


const addAccount = (email, password, site_name, site_url, category_id, user_id) => {
  return db
    .query('INSERT INTO accounts (email, password, site_name, site_url, category_id, user_id) VALUES($1, $2, $3, $4, $5, $6)', [email, password, site_name, site_url, category_id, user_id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};


const editAccount = (email, password, id) => {
  return db
    .query('UPDATE accounts SET email = $1, password = $2 WHERE id = $3', [email, password, id])
    .then((result) => {
      console.log(results);
      console.log(result.rowCount);
    })
    .catch((err) => {
      console.log(err.message);
    });

};


const deleteAccount = (id) => {
  return db
    .query('DELETE FROM accounts WHERE accounts.id = $1', [id])
    .then((result) => {
      console.log(result.rowCount);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const loginAccount = (email, user_password) => {
  console.log("email and password", email, user_password);
  return db
    .query('SELECT * FROM users WHERE email = $1 AND user_password = $2', [email, user_password])
    .then((result) => {
      if (!result.rows[0]) {
        return Promise.reject(new Error("no user found"));
      }
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getAllAccounts, getAccountsByCategory, addAccount, editAccount, deleteAccount, loginAccount, getIndividualAccount };
