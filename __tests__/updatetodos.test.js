const request = require("supertest");
const app = require("../app");

test("it should update todo as done", () => {
  return request(app)
    .patch("/todos/0")
    .send({ done: true })
    .expect({ done: true });
});
