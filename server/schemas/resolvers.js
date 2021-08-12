const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const { Playbook } = require('../models');

const resolvers = {
    Query: {
        getPlaybooks: async () => {
            return Playbook.find();
        }
    },
    // Mutation: {

    // }
};

module.exports = resolvers;