// Imports / Requires / Packages

const express = require('express');
const morgan = require('morgan');
const path = require('path');

// Configuration

const app = express();
const PORT = 8000;

app.set('views', './views');
app.set('view engine', 'ejs');


// Middleware

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Route

const passwordkeeprRouter = require('./routes/passwordkeeprRoutes.js');
app.use('/', passwordkeeprRouter);


// Listener

app.listen(PORT, () => console.log(
  `Express server is listening: http://localhost:${PORT}`
));