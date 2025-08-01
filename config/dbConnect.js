const mongoose = require('mongoose');

const dbIsConnect = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL) // <-- এখানে ঠিক করো
      .then(() => {
        console.log('db is connect successfully');
      })
      .catch(() => {
        console.log('db is not connect');
      });
  } catch (error) {
    console.log('db is not connect is big problem', error);
    process.exit(1);
  }
};

module.exports = dbIsConnect;
