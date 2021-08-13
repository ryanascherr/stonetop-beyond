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

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        getUsers: [User]
        getUser(username: String!): User
        getPlaybooks: [Playbook]
        getBackground(playbook: String!): Background
        getDrive(playbook: String!): Drive
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;