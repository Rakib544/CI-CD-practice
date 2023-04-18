const request = require("supertest");

const app = require("../app");

it("Get all users email and id", () => {
  request(app).get("/").expect(200).expect("Content-Type", "/json/");
});

it("Create a new user by giving email address", () => {
  request(app)
    .post("/send")
    .expect("Content-Type", "/json/")
    .send({ email: "rakib@gmail.com" })
    .expect(201)
    .expect((res) => {
      res.body.data.length = 2;
      res.body.data[0].email = "test@example.com";
      res.body.data[1].email = "rakib@gmail.com";
    });
});
