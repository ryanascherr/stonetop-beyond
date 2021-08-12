const { Schema, model } = require('mongoose');

const moveSchema = new Schema({
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

const Move = model('Move', moveSchema);

module.exports = Move;