const mongoose = require('mongoose');

const dbIsConnect = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URl)
      .then(() => {
        console.log('db is connect sucessfully');
      })
      .catch(() => {
        console.log('db is not connect ');
      });
  } catch (error) {
    console.log('db is not conntect is big problem', error);
    process.exit();
  }
};

module.exports = dbIsConnect;
