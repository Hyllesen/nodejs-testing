const database = [
  { name: "laundry", done: false },
  { name: "washing clothes", done: false }
];

exports.getTodo = (req, res) => {
  const index = req.params.index;
  if (database[index] === undefined) {
    return res.status(404).send();
  }
  return res.send(database[index]);
};

exports.getAllTodos = (req, res) => {
  res.send(database);
};

exports.updateTodo = (req, res) => {
  const index = req.params.index;
  const body = req.body;
  const todo = database[index];
  if (body.done === undefined) {
    return res.status(500).send();
  }
  todo.done = body.done;
  res.send({ done: todo.done });
};

exports.createTodo = (req, res) => {
  const todo = req.body;
  if (todo.done === undefined || todo.name === undefined) {
    return res.status(500).send();
  }
  database.push(todo);
  res.send(database[database.length - 1]);
};

exports.deleteTodo = (req, res) => {
  const todoToDelete = database[req.params.index];
  res.send(todoToDelete);
  database = database.splice(req.params.index, 1);
};
