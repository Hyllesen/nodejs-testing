const request = require("supertest");

const app = require("../app");

test("it should create a new todo", () => {
  return request(app)
    .post("/todos")
    .send({ name: "dishes", done: false })
    .expect({ name: "dishes", done: false });
});
