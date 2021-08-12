const { Schema, model } = require('mongoose');

const playbookSchema = new Schema({
  name: {
    type: String,
  },
  complexity: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Playbook = model('Playbook', playbookSchema);

module.exports = Playbook;