const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  title: { type: String, required: true },
  start: {type: String, require: true},
  backgroundColor: {type: String, require: true},
  textColor: {type: String, require: true},
  allDay: {type: Boolean, require: true}
});

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;