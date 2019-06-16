const express = require("express");
const todoController = require("../controllers/todo");
const router = express.Router();

router.get("/todos/:index", todoController.getTodo);
router.get("/todos", todoController.getAllTodos);
router.patch("/todos/:index", todoController.updateTodo);
router.post("/todos", todoController.createTodo);
router.delete("/todos/:index", todoController.deleteTodo);

module.exports = router;
