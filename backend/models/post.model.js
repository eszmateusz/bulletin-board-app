const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: String, required: true },
  date: { type: Date, required: true },
  updateDate: { type: Date, required: true },
  status: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  price: { type: Number },
  phone: { type: String },
  location: { type: String },
});

module.exports = mongoose.model('Post', postSchema);