const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

//, getAccountsByCategory, addAccount, editAccount, deleteAccounty
const { getAllAccounts, addAccount, getAccountsByCategory, addAccount, editAccount, deleteAccount, loginAccount } = require('../db/queries/passwordkeeprdatabase.js');

/////////////////////////////////////////////////////////
////////////////////////GET//////////////////////////////
/////////////////////////////////////////////////////////


//Login page
router.get('/login', (req, res) => {
  const userId = req.session.user_id;
  //If user is not logged in, goes to login page
  if (!userId) {
    res.render("login");
  } else {
    res.redirect("index"); //If user is logged in, redirects to /urls
  }
});

//The home page
router.get('/', (req, res) => {
  //Check if user is logged in
  const userId = req.session.user_id;
  // const isUserLoggedIn = req.session.user_id;
  getAllAccounts()
    .then((accounts) => {
      const templateVars = {
        accounts
      };
      // Redirect if not logged in
      if (!userId) {
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

//Category page
router.get('/:id', (req, res) => {
  const userId = req.session.user_id;
  if (!userId) {
    return res.redirect('/login');
  }

  const id = req.params.id;

  getAccountsByCategory(id)
    .then((accounts) => {
      const templateVars = {
        accounts
      };
      res.status(200).render('category', templateVars);
    });
});

// Edit account 
router.get('/:id/edit', (req, res) => {

  const userId = req.session.user_id;
  if (!userId) {
    return res.redirect('/login');
  }

  const postId = req.params.id;

  editAccount(postId)
    .then((post) => {
      res.render('edit', { post });
    })
    .catch((error) => {
      console.error('Error fetching post:', error);
      res.status(500).send('Internal Server Error');
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
  let accountUserId = req.session.user_id;

  const account = (accountEmail, accountPassword, accountSiteName, accountSiteUrl, accountCategory, accountUserId);

  addAccount(account)
    .then(() => {
      res.send('Success! Return to home <a href="/">here</a>');
    })
    .catch((e) => res.send(e));
});

//Login account button
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const loggedIn = loginAccount(email, password)
    .then((user) => {
      if (!loggedIn) {
        return res.status(400).send("Username and password are required.");
      }

      req.session.user_id = user.id;
      res.redirect("/");
    })
    .catch((e) => res.send(e));
});


//Update account 

router.post("/edit", (req, res) => {
  let accountEmail = req.body.email;
  let accountPassword = req.body.password;
  let accountUserId = req.session.user_id;

  const account = (accountEmail, accountPassword, accountUserId);

  addAccount(account)
    .then(() => {
      res.send('Success! Return to home <a href="/">here</a>');

    })
    .catch((e) => res.send(e));
});

// Delete account 
router.delete("/:id/delete", (req, res) => {
  const accountId = req.params.id;

  deleteAccount(accountId)
    .then(() => {
      res.send('Account deleted successfully');
    })
    .catch((error) => {
      res.status(500).send('Error deleting account: ' + error.message);
    });
});


module.exports = router;



