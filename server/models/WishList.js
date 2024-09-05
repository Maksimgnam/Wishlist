const mongoose = require('mongoose');

const wishListSchema = new mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    userId:String,
    wishes:[]

});

const WishList = mongoose.model('WishList', wishListSchema);

module.exports = WishList