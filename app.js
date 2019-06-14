const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello world!"));

const database = [
  { name: "laundry", done: false },
  { name: "washing clothes", done: false }
];

app.get("/todos/:index", (req, res) => {
  const index = req.params.index;
  res.send(database[index]);
});

app.patch("/todos/:index", (req, res) => {
  const index = req.params.index;
  const body = req.body;
  console.log(body);
  res.send({ shit: "shit" });
});

module.exports = app;
