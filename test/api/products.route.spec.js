const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");

const Product = require("../../models/Product.model");

describe("Pruebas sobre la API de products", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://localhost:27017");
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

  describe("POST /api/products", () => {
    const newProduct = {
      name: "Peras",
      description: "Prueba de peras",
      brand: "Lider",
      price: 20000,
      discount: 0,
      total: 20000,
    };
    const wrongProduct = { nombre: "test Product" };

    afterAll(async () => {
      await Product.deleteMany({ name: "test Product" });
    });

    it("La ruta funcione", async () => {
      const response = await request(app)
        .post("/api/products")
        .send(newProduct);

      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });

    it("Se inserta correctamente", async () => {
      const response = await request(app)
        .post("/api/products")
        .send(newProduct);

      expect(response.body._id).toBeDefined();
      expect(response.body.name).toBe(newProduct.name);
    });
  });

  describe("GET /api/products/search/nada", () => {
    let response;
    beforeEach(async () => {
      response = await request(app).get("/api/products/search/nada").send();
    });

    it("La ruta funciona", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });

    it("La petición nos devuelve un array de products", async () => {
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe("GET /api/products/search/desc/re", () => {
    let response;
    beforeEach(async () => {
      response = await request(app).get("/api/products/search/desc/re").send();
    });

    it("La petición nos devuelve un objecto ", async () => {
      expect(response.body).toEqual({ mesagge: "not valid" });
    });
  });
});
