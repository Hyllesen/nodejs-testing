const request = require("supertest");
const app = require("../app");

test("it should return a todo item", () => {
  return request(app)
    .get("/todos/0")
    .expect({
      name: "laundry",
      done: false
    });
});

test("it should return another todo item", () => {
  return request(app)
    .get("/todos/1")
    .expect({
      name: "washing clothes",
      done: false
    });
});

test("it should return all todos", () => {
  return request(app)
    .get("/todos")
    .expect([
      { name: "laundry", done: false },
      { name: "washing clothes", done: false }
    ]);
});
