const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0/check",
{
    useNewUrlParser: true, useUnifiedTopology: true
});
const db =mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to mongoDB"));

db.once("open", function () {
  console.log("Connect to mongoDB successfully ");
});

module.exports = db;