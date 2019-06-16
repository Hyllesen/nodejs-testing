const express = require("express");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const authMiddleware = require("./middleware/auth");

const todoRoutes = require("./routes/todo");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  if (req.body.username === "john" && req.body.password === "123") {
    const token = jwt.sign({ username: req.body.username }, "supersecretkey");
    return res.send({ message: "login successful", token });
  }
});

app.use(authMiddleware);

app.use(todoRoutes);

module.exports = app;
