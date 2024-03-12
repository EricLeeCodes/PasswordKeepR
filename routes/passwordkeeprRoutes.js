const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');

//, getAccountsByCategory, addAccount, editAccount, deleteAccounty
const { getAllAccounts, addAccount } = require('../db/queries/passwordkeeprdatabase.js');

/////////////////////////////////////////////////////////
////////////////////////GET//////////////////////////////
/////////////////////////////////////////////////////////

router.get('/login', (req, res) => {

});

//The home page
router.get('/', (req, res) => {
  //Check if user is logged in
  const isUserLoggedIn = req.session.user_id;
  getAllAccounts()
    .then((accounts) => {
      const templateVars = {
        accounts
      };
      // Redirect if not logged in
      if (!isUserLoggedIn) {
        return res.redirect('/login');
      }

      res.status(200).render('index', templateVars);
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
      res.status(200).render('category', templateVars);
    });
});


/////////////////////////////////////////////////////////
////////////////////////POST/////////////////////////////
/////////////////////////////////////////////////////////

// Create a new account
router.post("/create", (req, res) => {
  let accountEmail = req.body.email;
  let accountPassword = req.body.password;
  let accountSiteName = req.body.site_name;
  let accountSiteUrl = req.body.site_url;
  let accountCategory = req.body.category;
  let accountUserId = 1;

  const account = (accountEmail, accountPassword, accountSiteName, accountSiteUrl, accountCategory, accountUserId);

  addAccount(account)
    .then(() => {
      res.send('Success! Return to home <a href="/">here</a>');

    })
    .catch((e) => res.send(e));
});




module.exports = router;



// route to index.ejs 
// route to catergories.ejs