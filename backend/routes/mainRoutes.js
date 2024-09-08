// A Main route kezelése
const express = require('express');
const { mainGet } = require('../controllers/mainControllers');

const router = express.Router();

router.get('/', mainGet);

module.exports = router;
