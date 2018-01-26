//Dependencies
const mongoose = require('mongoose');
const Article = require('./articles.js')
const authorSchema = mongoose.Schema({
  name: String
})

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
