// create our schema
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const personschema = new schema({
  name: String,
  age: Number,
  faveratefood: String,
});

const person = mongoose.model("Person", personschema);

module.exports = person;
