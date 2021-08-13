const db = require('../config/connection');
const { Playbook, Background, Drive, Origin, Move } = require('../models');

const playbookData = require('./playbookData.json');
const backgroundData = require('./backgroundData.json');
const driveData = require('./driveData.json');
const originData = require('./originData.json');
const moveData = require('./moveData.json');

db.once('open', async () => {
    await Playbook.deleteMany({});
    await Background.deleteMany({});
    await Drive.deleteMany({});
    await Origin.deleteMany({});
    await Move.deleteMany({});

    const playbooks = await Playbook.insertMany(playbookData);
    const backgrounds = await Background.insertMany(backgroundData);
    const drives = await Drive.insertMany(driveData);
    const origins = await Origin.insertMany(originData);
    const moves = await Move.insertMany(moveData);

    console.log('Users seeded!');
    process.exit(0);
});