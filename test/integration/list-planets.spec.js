const request = require("supertest");
const app = require("../../src/main/app");
const PlanetSchema = require("../../src/model/Planets");
const conn = require("../../src/infra/database/index");

beforeAll(async () => {
  await conn.connect();
});

afterAll(async () => {
  await conn.close();
});

describe("GET /api/v1/planets", () => {
  beforeAll(async () => {
    endpoint = "/planets";
  });

  it("should return 200 when listing all planets", async () => {
    const response = await request(app).get(endpoint);
    expect(response.status).toBe(200);
  });
});