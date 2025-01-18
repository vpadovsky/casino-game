const express = require('express');
const { spinSlot } = require('../controllers/slot');

const router = express.Router();

router.post('/spin', spinSlot);

module.exports = { slotRoutes: router };
