const router = require("express").Router();

const Product = require("../../models/Product.model");

router.get("/", async (req, res) => {
  try {
    const Products = await Product.find();
    res.json(Products);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

module.exports = router;
