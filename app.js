const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.get("/", (req, res) => res.send("Hello world!"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const database = [
  { name: "laundry", done: false },
  { name: "washing clothes", done: false }
];

app.get("/todos/:index", (req, res) => {
  const index = req.params.index;
  res.send(database[index]);
});

app.get("/todos", (req, res) => {
  res.send(database);
});

app.patch("/todos/:index", (req, res) => {
  const index = req.params.index;
  const body = req.body;
  const todo = database[index];
  todo.done = body.done;
  res.send({ done: todo.done });
});

module.exports = app;
