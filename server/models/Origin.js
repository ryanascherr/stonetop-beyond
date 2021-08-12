const { Schema, model } = require('mongoose');

const originSchema = new Schema({
  playbook: {
    type: String,
  },
  location: {
    type: String,
  },
  names: {
    type: String,
  },
});

const Origin = model('Origin', originSchema);

module.exports = Origin;