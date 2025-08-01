const express = require('express');
const userUpdateController = require('../../../controller/userUpdate.controller');

const router = express.Router();

router.put('/:id', userUpdateController);

module.exports = router;
