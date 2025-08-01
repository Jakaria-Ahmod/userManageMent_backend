const EmailValiton = require('../helper/emailValition');
const User = require('../model/ragister.mondel');
const bcrypt = require('bcrypt');

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // input fiald required chacking
    if (!name) {
      return res.json({ message: 'Pliese Enter Your Name' });
    } else if (!email) {
      return res.json({ message: 'Pliese Enter Your Email' });
    } else if (!password) {
      return res.json({ message: 'Pliese Enter Your Password' });
    }
    // email  validion checking
    if (!EmailValiton(email)) {
      return res.json({ message: 'Pliese Enter Your Valid Email' });
    }

    // email exting checking
    const extingEmail = await User.findOne({ email });

    if (extingEmail) {
      return res.json({ message: 'email alredy exting' });
    }
    // has password

    const hasingPassword = await bcrypt.hash(password, 10);

    // new user push db
    const newUser = await User({
      name,
      email,
      password: hasingPassword,
    });

    // data is save in db
    newUser.save();
    //
    res.json({
      message: 'user createded sucessfully',
      sucess: true,
      user: newUser,
    });
  } catch (error) {
    res.json({ message: 'user not create, pliese try agin' });
  }
};

module.exports = registerController;
