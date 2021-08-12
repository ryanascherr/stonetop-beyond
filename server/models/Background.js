const { Schema, model } = require('mongoose');

const backgroundSchema = new Schema({
  playbook: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Background = model('Background', backgroundSchema);

module.exports = Background;