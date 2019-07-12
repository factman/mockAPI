"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthSchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

var Authentication = mongoose.model("Authentication", AuthSchema);
module.exports = Authentication;