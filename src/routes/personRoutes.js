const express = require('express');
const router = express.Router();
const { getAllPersons } = require('../controllers/personController');

router.get('/all', getAllPersons);

module.exports = router;
