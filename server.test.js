const request = require("supertest");
const app = require("./server");

describe("GET /", () => {
  it("responds with the index.html file", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe("text/html");
  });
});

describe("GET /api/random-quote", () => {
  it("responds with a random quote", async () => {
    const response = await request(app).get("/api/random-quote");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("quote");
    expect(response.body).toHaveProperty("author");
    expect(response.body).toHaveProperty("success", true);
  });
});
