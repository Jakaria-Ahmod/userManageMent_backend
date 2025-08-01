const express = require('express');

const router = express.Router();
const register = require('./ragister');
const login = require('./login');
const allUser = require('./allUser');
const singleUser = require('./singleUser');
const updateUser = require('./update');
const deleteUser = require('./userDelete');

//

router.use('/register', register);
router.use('/login', login);
router.use('/allUser', allUser);
router.use('/singleUser', singleUser);
router.use('/updateUser', updateUser);
router.use('/deleteUser', deleteUser);

module.exports = router;
