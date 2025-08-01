const User = require('../model/ragister.mondel');

const userUpdateController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateUser = req.body;

    if (!id) {
      return res.json({ message: 'Id is required' });
    }

    const updateUsers = await User.findByIdAndUpdate(id, updateUser, {
      new: true,
    });

    if (!updateUser) {
      return res.json({ message: 'user not found' });
    }
    res.json({
      messae: 'user update sucessfull',
      sucess: true,
      updateUser: updateUsers,
    });
  } catch (error) {
    res.json({ message: 'user not found' });
  }
};

module.exports = userUpdateController;
