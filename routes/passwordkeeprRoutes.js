const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');

//, getAccountsByCategory, addAccount, editAccount, deleteAccounty
const { getAllAccounts } = require('../db/queries/passwordkeeprdatabase.js');


// router.get('/login', (req,res) => {

// })

//The home page
router.get('/index', (req, res) => {
    console.log('##millionth attempt')
  //Check if user is logged in
  // const isUserLoggedIn = req.session.user_id;
  getAllAccounts()
    .then((accounts) => {
      const templateVars = {
        accounts
      };
      // Redirect if not logged in
      // if (!isUserLoggedIn) {
      //   return res.redirect('/login');
      // } 

      res.status(200).render('index', templateVars);
    })
    .catch((error) => {
        // Handle the error
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
      });
});




// router.get('/:id', (req, res) => {
//     const id = req.params.id;

//     getAccountsByCategory(id)
//         .then((accounts) => {
//             const templateVars = {
//                 accounts
//             };
//             res.status(200).render('/categories', templateVars);
//         });
// });


module.exports = router;



// route to index.ejs 
// route to catergories.ejs