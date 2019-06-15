const request = require("supertest");

const app = require("../app");

test("it should create a new todo", () => {
  return request(app)
    .post("/todos")
    .send({ name: "dishes", done: false })
    .expect({ name: "dishes", done: false });
});

test("it should say if properties is missing", () => {
  return request(app)
    .post("/todos")
    .send({ name: "dog walking" })
    .expect(500);
});

test("it should return 500 on missing name", () => {
  return request(app)
    .post("/todos")
    .send({ done: false })
    .expect(500);
});
