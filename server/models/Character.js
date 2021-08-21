const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
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
    maxHP: {
        type: String,
    },
    currentHP: {
        type: String,
    },
    damage: {
        type: String,
    },
    level: {
        type: String,
    },
    exp: {
        type: String,
    },
    characterCreator: {
        type: String,
        trim: true,
    },
});

const Character = model('Character', characterSchema);

module.exports = Character;