const express = require("express");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();

const todoRoutes = require("./routes/todo");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.username === "john" && req.body.password === "123") {
    const token = jwt.sign("");
    return res.send({ message: "login successful" });
  }
});

app.use(todoRoutes);

module.exports = app;
