const express = require('express');
const router = express.Router();
const itemCtrl = require('../../controllers/api/items');

// POST /api/users
router.get('/index', itemCtrl.index);
router.get('/:id', itemCtrl.show);
module.exports = router;