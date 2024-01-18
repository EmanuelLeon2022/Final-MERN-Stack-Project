const express = require('express');
const router = express.Router();


// GET /api/items
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);

const itemsCtrl = require('../../controllers/api/items');
router.get('/', itemsCtrl.index);
// GET /api/items/:id
router.get('/:id', itemsCtrl.show);

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const usersCtrl = require('../../controllers/api/users');

// const ensureLoggedIn = require('../../config/ensureLoggedIn')
// // POST /api/users
// router.post('/', usersCtrl.create);
// router.post('/login', usersCtrl.login);

// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)
// module.exports = router;