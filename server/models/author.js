require('../config/mongoose');
const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
require('./quote');
module.exports = (() => {
    const AuthorSchema = new mongoose.Schema ({
    name: {type: String, required: [true, "Name is required"], minlength:[3, "Name should be atleast 3 characters long"],
    unique:[true, "Author's name already exists"]},
    auth_quotes: [QuoteSchema]
}, {timestamps:true});
Authors = mongoose.model('Authors', AuthorSchema);
AuthorSchema.plugin(uniqueValidator);
})();