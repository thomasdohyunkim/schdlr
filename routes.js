const express = require('express');
const router = express.Router();
const db = require('./queries');

router.get('/testclasses', db.getFiveClasses);

module.exports = router;