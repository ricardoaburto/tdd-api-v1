const router = require("express").Router();

const Product = require("../../models/Product.model");

router.get("/products", async (req, res) => {
  try {
    const Products = await Product.find();
    res.json(Products);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

module.exports = router;
