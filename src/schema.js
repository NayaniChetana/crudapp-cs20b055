const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        minlenght: 2,
        required: true
    },
    email : {
        type: String,
        minlenght: 2,
        required: true
    }
})

module.exports = userSchema