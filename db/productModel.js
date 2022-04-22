const mongoose = require("mongoose");
const Product = require("../models/product.model");

(async () => {
  await mongoose.connect("mongodb://localhost:27017/products");

  const newProduct = await Product.create({
    name: "Peras",
    description: "Prueba de peras",
    brand: "Lider",
    price: 20000,
    discount: 0,
    total: 1,
  });
  console.log(newProduct);
})();
