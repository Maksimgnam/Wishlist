const mongoose = require('mongoose');

const wishSchema = new mongoose.Schema({
    title: { type: String, required: true },
    isBooked: { type: Boolean, default: false },
    wishId:{ type: String, required: true }


});

const Wish = mongoose.model('Wish', wishSchema);

module.exports = Wish