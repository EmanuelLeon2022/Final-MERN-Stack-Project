const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    image: {type: String, required: true},
    type:  { type: String, required: true },
    battery: {type: String, required: true},
    brand: { type: String, required: true},
    secured: Boolean
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
