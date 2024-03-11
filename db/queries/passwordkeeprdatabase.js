const db = require('../connection');

const getAllUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};

module.exports = { getAllUsers };