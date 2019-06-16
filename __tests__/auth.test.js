const request = require("supertest");
const app = require("../app");

it("should return token on valid login", async () => {
  const response = await request(app)
    .post("/login")
    .send({ username: "john", password: "123" })
    .expect(200);
  expect(response.body.message).toBe("login successful");
  expect(typeof response.body.token).toBe("string");
});
