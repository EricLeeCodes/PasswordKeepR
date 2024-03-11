const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../db/queries/passwordkeeprdatabase.js');

router.get('/', (req, res) => {
  getAllUsers()
    .then((users) => {
      const templateVars = {
        users
      };
      res.status(200).render('/index', templateVars);
    });
});


/*
if (!users) {
    return res.send({ message: "User is not logged in" });
  }

  try {
"getsitesByUser" function from the "passwordkeepr" module
    const account = await loginUserdb.getaccountByUser(user.id)

    if (!organization) {
      return res.send({ error: "No account for the logged in user found" });
    }
*/