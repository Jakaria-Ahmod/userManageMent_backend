const express = require('express');
const deleteController = require('../../../controller/deleteUser.controller');

const router = express.Router();

router.delete('/:id', deleteController);

module.exports = router;
