const db = require('../config/connection');
const { Playbook } = require('../models');

const playbookData = require('./playbookData.json');

db.once('open', async () => {
    await Playbook.deleteMany({});

    const playbooks = await Playbook.insertMany(playbookData);

    console.log('Users seeded!');
    process.exit(0);
});