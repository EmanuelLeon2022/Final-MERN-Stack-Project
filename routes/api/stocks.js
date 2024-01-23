const express = require('express');
const router = express.Router();
const stockCtrl = require('../../controllers/api/stocks');

// POST /api/users
router.post('/', stockCtrl.create)
router.post('/', stockCtrl.crop )
router.get('/index', stockCtrl.index);
router.get('/:id', stockCtrl.show);
module.exports = router;