const mongoose = require("mongoose");

// to log to the console for easy debug
mongoose.set("debug", true);

// to easily handle async func
mongoose.Promise = global.Promise;

// DB connection

mongoose.connect("mongodb://localhost/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// import and export user and todo models
module.exports = require("./user");
module.exports = require("./todos");
