const mongoose = require("mongoose");

const userSchema = require("./schema")

const User = mongoose.model("Products", userSchema);

module.exports = User;