const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Please add a title for the blog'],
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
