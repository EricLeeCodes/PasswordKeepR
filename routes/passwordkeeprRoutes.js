const express = require('express');
const cookieSession = require('cookie-session');
const router = express.Router();

router.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));


const { getAllAccounts, addAccount, getAccountsByCategory, editAccount, deleteAccount, loginAccount, getIndividualAccount } = require('../db/queries/passwordkeeprdatabase.js');

/////////////////////////////////////////////////////////
////////////////////////GET//////////////////////////////
/////////////////////////////////////////////////////////


//Login page
router.get('/login', (req, res) => {
  return res.render("login");
});

//The home page
router.get('/', (req, res) => {

  const userId = req.session.user_id;

  //Check if user is logged in
  if (userId) {
    getAllAccounts()
      .then((accounts) => {
        const templateVars = {
          accounts
        };
        //Redirect if not logged in

        res.status(200).render('index', templateVars);
      })
      .catch((error) => {
        // Handle the error
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
      });
  }  //If user is not logged in, goes to login page
  if (!userId) {
    return res.redirect("/login");
  }
});

//Category page
router.get('/:id/category', (req, res) => {
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
    })
    .catch((error) => {
      // Handle the error
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
});

// Edit account 
router.get('/:id/edit', (req, res) => {

  const userId = req.session.user_id;
  if (!userId) {
    return res.redirect('/login');
  }

  const accountId = req.params.id;

  getIndividualAccount(accountId)
    .then((account) => {
      const templateVars = {
        account
      };
      res.status(200).render('edit', templateVars);
    });
});


// Create
router.get('/create', (req, res) => {
  const userId = req.session.user_id;
  if (!userId) {
    return res.redirect('/login');
  }

  res.status(200).render('create');
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



  addAccount(accountEmail, accountPassword, accountSiteName, accountSiteUrl, accountCategory, accountUserId)
    .then(() => {
      res.redirect("/");
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
      console.log("user", user);
      req.session.user_id = user.id;
      res.redirect("/");
    })
    .catch((e) => {
      console.log("e", e);
      res.send(`error: ${e}`);
    });

});


//Update account 
router.post("/:id/edit", (req, res) => {

  let accountEmail = req.body.email;
  let accountPassword = req.body.password;

  const postId = req.params.id;

  editAccount(accountEmail, accountPassword, postId)
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      console.error('Error fetching post:', error); s;
      res.status(500).send('Internal Server Error');
    });
});

// Delete account 
router.post("/:id/delete", (req, res) => {
  const accountId = req.params.id;
  deleteAccount(accountId)
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      res.status(500).send('Error deleting account: ' + error.message);
    });
});


module.exports = router;



