const db = require('../config/connection');
const { Playbook, Background } = require('../models');

const playbookData = require('./playbookData.json');
const backgroundData = require('./backgroundData.json');

db.once('open', async () => {
    await Playbook.deleteMany({});
    await Background.deleteMany({});

    const playbooks = await Playbook.insertMany(playbookData);
    const backgrounds = await Background.insertMany(backgroundData);

    console.log('Users seeded!');
    process.exit(0);
});