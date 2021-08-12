const { Schema, model } = require('mongoose');

const driveSchema = new Schema({
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

const Drive = model('Drive', driveSchema);

module.exports = Drive;