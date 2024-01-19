const stock = require('./stock')
const Schema = require('mongoose').Schema
const stockSchema = new Schema({
    name: { type: String, required: true },
    image: {type: String, required: true},
    type: {type: String, required: true},
    battery: { type: String, required: true},
    brand: { type: String, required: true},
  });

  module.exports = stockSchema;