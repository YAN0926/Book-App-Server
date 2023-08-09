// app.js

const express = require('express');
const connectDB = require('./config/db');

const app = express();
const cors = require('cors');
const books = require('./routes/api/books');


const path = require("path");

process.env["NODE_CONFIG_DIR"] = path.join(path.resolve("./"), "config/");
// Connect Database
connectDB();
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/hello', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/', books);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));