const express = require('express');
const router = express.Router();
const stockCtrl = require('../../controllers/api/stocks');

// POST /api/users
router.get('/', stockCtrl.create)
router.get('/index', stockCtrl.index);
router.get('/:id', stockCtrl.show);
module.exports = router;