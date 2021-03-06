// ./server.js

const express = require('express');
const path = require('path');
const logger = require('morgan');
const threadController = require("./routes/api/thread"); 

require('dotenv').config();
require('./config/database');

const app = express();

app.use(logger('dev'));
// there's no need to mount express.urlencoded middleware
// why is that?
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(express.static(path.join(__dirname, 'build')));

// Check if token and create req.user
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use("/threads", threadController)
// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const PORT = process.env.PORT || 8000;

app.listen(PORT, function() {
  console.log(`Express app running on port ${PORT}`)
});