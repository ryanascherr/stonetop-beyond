const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Playbook {
        _id: ID
        name: String
        complexity: String
        image: String
        description: String
    }

    type Query {
        getPlaybooks: [Playbook]
    }
`;

module.exports = typeDefs;