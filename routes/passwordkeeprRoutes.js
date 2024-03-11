const express = require('express');
const router = express.Router();
const { getAllAccounts, getAccountsByCategory } = require('../db/queries/passwordkeeprdatabase.js');

router.get('/', (req, res) => {
  getAllAccounts()
    .then((accounts) => {
      const templateVars = {
        accounts
      };
      res.status(200).render('/index', templateVars);
    })
    .catch((error) => {
        // Handle the error
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
      });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    getAccountsByCategory(id)
        .then((accounts) => {
            const templateVars = {
                accounts
            };
            res.status(200).render('/categories', templateVars);
        });
});






// route to index.ejs 
// route to catergories.ejs