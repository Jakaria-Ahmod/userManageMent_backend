const User = require('../model/ragister.mondel');

const deleteController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: 'Id Is requird' });
    }

    const deleteUser = await User.findByIdAndDelete(id);

    if (!deleteUser) {
      return res.status(404).json({ message: 'user not found' });
    }
    res.status(200).json({
      message: 'user delete sucessfull',
      sucess: true,
      user: deleteUser,
    });
  } catch (error) {
    res.status(404).json({ message: 'user not ragisted problem' });
  }
};

module.exports = deleteController;
