const{Schema, model} = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  shortText: {
    type: String,
    required: true
  },
  longText: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
});

module.exports = model('cat', schema);
