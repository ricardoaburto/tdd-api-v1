const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    brand: { type: String, required: true, maxlength: 15 },
    price: { type: Float32Array, required: true },
    discount: { type: Float32Array, required: true },
    total: { type: Float32Array, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", ProductSchema);
