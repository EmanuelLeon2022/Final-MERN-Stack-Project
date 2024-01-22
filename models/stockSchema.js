const stock = require('./stocks')
const Schema = require('mongoose').Schema
const stockSchema = new Schema({
    name: { type: String, required: true },
    image: {type: String, required: true},
    usage: {type: String, required: true},
    strength: { type: Number, required: true},
  });

  module.exports = stockSchema;