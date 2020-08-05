const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
// const mongoose = require('./db/mongoose.js')

const app = express();

const secret = "mysecretsshhh";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

// if user makes a request http://localhost:5000/api/home it will go to ./home/index.js
app.use("/", require("./home"));
app.use("/", require("./login/login.js"));
app.use("/tests", require("./tests")); // ./tests/index.js
app.use("/comment", require("./comment"));
app.use('/users', require('./users'));
module.exports = app;
