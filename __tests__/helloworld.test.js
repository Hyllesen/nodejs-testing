const request = require("supertest");
const app = require("../app");

test("it should return hello world!", () => {
  return request(app)
    .get("/")
    .expect("Hello world!");
});
