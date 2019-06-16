const supertest = require("supertest");
const app = require("../app");
const authenticate = require("../authenticate");

let authToken = "";
let request;

beforeAll(async () => {
  const token = await authenticate.getAuthToken();
  authToken = token.body.token;
  request = supertest.agent(app).set("Authorization", authToken);
});

test("it should return a todo item", () => {
  return request.get("/todos/0").expect({
    name: "laundry",
    done: false
  });
});

test("it should return another todo item", () => {
  return request.get("/todos/1").expect({
    name: "washing clothes",
    done: false
  });
});

test("it should return all todos", () => {
  return request
    .get("/todos")
    .expect([
      { name: "laundry", done: false },
      { name: "washing clothes", done: false }
    ]);
});

it("should return 404 not found", () => {
  return request.get("/todos/55").expect(404);
});

it("should return 404 on invalid index", () => {
  return request.get("/todos/hey").expect(404);
});

it("should return 401 because we are not logged in!", () => {
  return request.get("/todos").expect(401);
});
