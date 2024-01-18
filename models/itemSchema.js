const item = require('./item');

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  image: {type: String, required: true},
  type: {type: String, required: true},
  battery: { type: String, required: true},
  brand: { type: Number, required: true},
  secured: Boolean,
});

module.exports = itemSchema;
