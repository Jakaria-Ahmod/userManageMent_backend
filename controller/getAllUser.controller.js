const User = require('../model/ragister.mondel');
const mongoose = require('mongoose');
const allUerController = async (req, res) => {
  try {
    console.log('MongoDB Connection State:', mongoose.connection.readyState);
    const getAllUser = await User.find();

    res.status(200).json({
      message: 'all user done',
      sucess: true,
      users: getAllUser,
    });
  } catch (error) {
    console.error(error); // এটা Error console-এ দেখাবে
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
};

module.exports = allUerController;
