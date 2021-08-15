const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
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
        getDrive(playbook: String!): [Drive]
        getOrigin(playbook: String!): [Origin]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;