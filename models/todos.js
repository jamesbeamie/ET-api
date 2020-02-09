const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  taskname: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("Todo", todoSchema);
