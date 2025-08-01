const express = require('express');
const singleUserGet = require('../../../controller/singleUser.controller');
const router = express.Router();

router.get('/:id', singleUserGet);

module.exports = router;
