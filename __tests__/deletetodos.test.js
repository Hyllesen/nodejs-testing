const request = require("supertest");
const app = require("../app");

test("it should delete todos", async () => {
  await request(app)
    .delete("/todos/0")
    .expect({ name: "laundry", done: false });
  await request(app)
    .get("/todos")
    .expect([{ name: "washing clothes", done: false }]);
});
