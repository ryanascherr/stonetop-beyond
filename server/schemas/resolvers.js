const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const { Playbook, User, Background, Drive, Origin, Character } = require('../models');

const resolvers = {
    Query: {
        getPlaybook: async (parent, { name }) => {
            return Playbook.find({ name });
        },
        getPlaybooks: async () => {
            return Playbook.find();
        },
        getBackground: async (parent, { name }) => {
            return Background.find({ name })
        },
        getBackgrounds: async (parent, { playbook }) => {
            return Background.find({ playbook })
        },
        getDrive: async (parent, { name, playbook }) => {
            return Drive.find({ name, playbook })
        },
        getDrives: async (parent, { playbook }) => {
            return Drive.find({ playbook })
        },
        getOrigin: async (parent, { playbook }) => {
            return Origin.find({ playbook })
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
        addCharacter: async (parent, { playbook, background, drive, origin, name, str, dex, int, wis, con, cha }) => {
            const character = await Character.create({ playbook, background, drive, origin, name, str, dex, int, wis, con, cha });
            return { user };
        }
    }
};

module.exports = resolvers;