const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: false
  },
  about: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  key: {
    type: String
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;