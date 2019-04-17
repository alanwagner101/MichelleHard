const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, reuired: true },
  price: { type: String, required: true },
  img: { type: String, require: true },
  prodType: { type: String, required: true }
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;