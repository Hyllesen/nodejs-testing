const request = require("supertest");
const app = require("../app");

test("it should update todo as done", () => {
  return request(app)
    .patch("/todos/0")
    .send({ done: true })
    .expect({ done: true });
});

test("it should return 500, wrong properties", () => {
  return request(app)
    .patch("/todos/0")
    .send({ hubercrafts: 1 })
    .expect(500);
});
