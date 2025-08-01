require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./router');
const dbIsConnect = require('./config/dbConnect');
const PORT = process.env.PORT || 5050;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Database Connect
dbIsConnect();

app.listen(PORT, () => {
  console.log(`server is runing at http://127.0.0.1:${PORT}`);
});
