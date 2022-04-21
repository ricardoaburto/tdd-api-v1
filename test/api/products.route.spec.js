const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");

const Product = require("../../models/Product.model");

describe("Pruebas sobre la API de products", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://root:password@localhost:27017/product");
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  describe("GET /api/products", () => {
    let response;
    beforeEach(async () => {
      response = await request(app).get("/api/products").send();
    });

    it("La ruta funciona", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });

    it("La petición nos devuelve un array de products", async () => {
      expect(response.body).toBeInstanceOf(Array);
    });
  });
});
