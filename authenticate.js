const request = require("supertest");
const app = require("./app");

exports.getAuthToken = async () => {
  const token = await request(app)
    .post("/login")
    .send({ username: "john", password: "123" });
  return token;
};
