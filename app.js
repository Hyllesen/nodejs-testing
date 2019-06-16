const express = require("express");
const bodyparser = require("body-parser");
const app = express();

const todoRoutes = require("./routes/todo");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(todoRoutes);

module.exports = app;
