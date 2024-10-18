const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 10
    },
    confirm_password: {
        type: String,
        required: true,
        minlength: 10
    },

})

module.exports = mongoose.model("Admin", AdminSchema)