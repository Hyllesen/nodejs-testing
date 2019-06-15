const request = require("supertest");
const app = require("../app");

test("it should delete todos", () => {
  return request(app)
    .delete("/todos/0")
    .expect({ name: "laundry", done: false });
});
