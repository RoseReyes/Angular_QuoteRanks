require('../config/mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = (() => {
     QuoteSchema = new mongoose.Schema ({
     quote: {type: String, required: [true, "Quote is required"], minlength: [3,"Quote should be more than 3 characters long"]},
     votes: {type: Number, default: 0}
}, {timestamps:true});
Quotes = mongoose.model('Quotes', QuoteSchema);
})();