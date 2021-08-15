const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
    userId: {
        type: String,
    },
    playbook: {
        type: String,
    },
    background: {
        type: String,
    },
    drive: {
        type: String,
    },
    origin: {
        type: String,
    },
    name: {
        type: String,
    },
    str: {
        type: String,
    },
    dex: {
        type: String,
    },
    int: {
        type: String,
    },
    wis: {
        type: String,
    },
    con: {
        type: String,
    },
    cha: {
        type: String,
    },
});

const Character = model('Character', characterSchema);

module.exports = Character;