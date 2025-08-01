const User = require('../model/ragister.mondel');

const allUerController = async (req, res) => {
  try {
    const getAllUser = await User.find();

    res.json({
      message: 'all user done',
      sucess: true,
      users: getAllUser,
    });
  } catch (error) {
    res.json({ message: 'somthing erro get in all user' });
  }
};

module.exports = allUerController;
