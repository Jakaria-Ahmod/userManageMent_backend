const User = require('../model/ragister.mondel');

const singleUserGet = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.json({ message: 'id is requird' });
    }

    const singleUser = await User.findOne({ _id: id });

    if (!singleUser) {
      return res.json({
        message: 'user not found ',
      });
    }
    res.json({
      message: ' i am single user get',
      user: singleUser,
    });
  } catch (error) {
    res.json({ message: 'something eror in sigle user geting' });
  }
};

module.exports = singleUserGet;
