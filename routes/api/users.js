// /routes/api/users.js
const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('https://sneakers-forum.herokuapp.com/', usersCtrl.create);
// POST /api/users/login
router.post('https://sneakers-forum.herokuapp.com/login', usersCtrl.login);

// // GET /api/users/check-token
router.get('https://sneakers-forum.herokuapp.com/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
