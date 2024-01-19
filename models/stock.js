const mongoose = require('mongoose');

const stockSchema = require('./stockSchema')

module.exports = mongoose.model("Stock", stockSchema);