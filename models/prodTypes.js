const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prodTypeSchema = new Schema({
    prodType: { type: String, required: true }
});

const ProdType = mongoose.model("prodTypes", prodTypeSchema);

module.exports = ProdType;