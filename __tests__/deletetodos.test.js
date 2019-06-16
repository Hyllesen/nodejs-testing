const request = require("supertest");
const app = require("../app");
const authenticate = require("../authenticate");

let authToken = "";

beforeAll(async () => {
  const token = await authenticate.getAuthToken();
  authToken = token;
});

test("it should delete todos", async () => {
  await request(app)
    .delete("/todos/0")
    .expect({ name: "laundry", done: false });
  await request(app)
    .get("/todos")
    .expect([{ name: "washing clothes", done: false }]);
});
