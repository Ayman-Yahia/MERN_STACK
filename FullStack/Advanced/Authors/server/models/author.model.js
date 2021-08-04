const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { type: String,
        required: [true, "title is required"],
        minlength: [3, "First Name should be longer than 2 characters!"]
    },

}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);