const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
        characters: [Character]
    }

    type Playbook {
        _id: ID
        name: String
        complexity: String
        image: String
        description: String
    }

    type Background {
        _id: ID
        playbook: String
        name: String
        description: String
    }

    type Drive {
        _id: ID
        playbook: String
        name: String
        description: String
    }

    type Origin {
        _id: ID
        playbook: String
        location: String
        names: String
    }

    type Character {
        _id: ID
        userId: String
        playbook: String
        background: String
        drive: String
        origin: String
        name: String
        str: String
        dex: String
        int: String
        wis: String
        con: String
        cha: String
        characterCreator: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        getUsers: [User]
        getUser(username: String!): User
        getPlaybook(name: String!): [Playbook]
        getPlaybooks: [Playbook]
        getBackgrounds(playbook: String!): [Background]
        getBackground(name: String!): [Background]
        getDrive(name: String!, playbook: String!): [Drive]
        getDrives(playbook: String!): [Drive]
        getOrigin(playbook: String!): [Origin]
        getCharacter(characterCreator: String!): [Character]
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addCharacter(playbook: String, background: String, drive: String, origin: String, name: String, str: String, dex: String, int: String, wis: String, con: String, cha: String): Character
    }
`;

module.exports = typeDefs;