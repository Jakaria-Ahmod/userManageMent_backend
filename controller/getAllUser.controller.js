const User = require('../model/ragister.mondel');

const allUerController = async (req, res) => {
  try {
    const getAllUser = await User.find();

    res.status(200).json({
      message: 'all user done',
      sucess: true,
      users: getAllUser,
    });
  } catch (error) {
    res.json({ message: 'Errr' });
  }
};

module.exports = allUerController;
