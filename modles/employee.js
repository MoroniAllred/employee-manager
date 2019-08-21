const mongoose = require("mongoose")
const Schema = mongoose.Schema

const employeeScema = new Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true
    },
    lastName: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    employeeID: {
        type: Number,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model("Employee", employeeScema)