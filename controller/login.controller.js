const User = require('../model/ragister.mondel');
const bcrypt = require('bcrypt');

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // email and password validion
    if (!email) {
      return res.json({ message: 'Pliese Enter Your Email' });
    } else if (!password) {
      return res.json({ message: 'Pliese Enter Your password' });
    }
    //
    const userEmail = await User.findOne({ email });
    if (!userEmail) {
      return res.status(401).json({ message: 'Email not mtach' });
    }
    const mainPassword = await bcrypt.compare(password, userEmail.password);
    // const userPassword = await User.findOne({ mainPassword });

    if (!mainPassword) {
      return res.status(401).json({ message: 'password not match' });
    }
    res.json({ message: ' i am login route' });
  } catch (error) {
    return res.json({ message: 'login feaild' });
  }
};

module.exports = loginController;
