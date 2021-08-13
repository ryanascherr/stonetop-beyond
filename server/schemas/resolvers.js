const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const { Playbook, User, Background, Drive, Origin } = require('../models');

const resolvers = {
    Query: {
        getPlaybooks: async () => {
            return Playbook.find();
        },
        getBackground: async (parent, { playbook }) => {
            return Background.findOne({ playbook })
        },
        getDrive: async (parent, { playbook }) => {
            return Drive.findOne({ playbook })
        },
        getOrigin: async (parent, { playbook }) => {
            return Origin.findOne({ playbook })
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
    }
};

module.exports = resolvers;