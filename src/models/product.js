const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  price: {
    type: "number",
    required: true,
  },
  stock: {
    type: "string",
    required: true,
  },
});

modeule.exports = mongoose.model("User", userSchema);
