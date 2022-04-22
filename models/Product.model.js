const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    brand: { type: String, required: true, maxlength: 15 },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    total: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", ProductSchema);
