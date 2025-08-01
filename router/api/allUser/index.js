const express = require('express');
const allUerController = require('../../../controller/getAllUser.controller');
const router = express.Router();

router.get('/', allUerController);

module.exports = router;
