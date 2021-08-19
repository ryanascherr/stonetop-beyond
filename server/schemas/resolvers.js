const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const { Playbook, User, Background, Drive, Origin, Character } = require('../models');

const resolvers = {
    Query: {
        getUser: async (parent, { username }) => {
            return User.findOne({ username }).populate('characters');
          },      
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
        getCharacter: async (parent, { _id }) => {
            return Character.findOne({ _id }).populate('characters');
          }, 
        getCharacters: async (parent, { characterCreator }) => {
            return Character.find({ characterCreator })
        },
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('characters');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
        addCharacter: async (parent, { playbook, background, drive, origin, name, str, dex, int, wis, con, cha }, context) => {
            if (context.user) {
                const character = await Character.create({ playbook, background, drive, origin, name, str, dex, int, wis, con, cha, characterCreator: context.user.username });
                return character;
            }
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
        // addCharacter: async (parent, { playbook, background, drive, origin, name, str, dex, int, wis, con, cha }) => {
        //     const character = await Character.create({ playbook, background, drive, origin, name, str, dex, int, wis, con, cha });
        //     return { user };
        // }
    }
};

module.exports = resolvers;