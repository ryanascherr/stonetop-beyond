import { gql } from '@apollo/client';

export const QUERY_PLAYBOOK = gql`
  query getPlaybook($name: String!) {
    getPlaybook(name: $name) {
      _id
      name
      complexity
      image
      description
    }
  }
`;

export const QUERY_CHARACTER = gql`
  query getCharacter($_id: ID!) {
    getCharacter(_id: $_id) {
      _id
      name
      playbook
      background
      drive
      origin
      str
      dex
      int
      wis
      con
      cha
    }
  }
`;

export const QUERY_CHARACTERS = gql`
  query getCharacters($characterCreator: String!) {
    getCharacters(characterCreator: $characterCreator) {
      _id
      name
      playbook
      background
      drive
      origin
      str
      dex
      int
      wis
      con
      cha
    }
  }
`;

export const QUERY_PLAYBOOKS = gql`
  query getPlaybooks {
    getPlaybooks {
        _id
        name
        complexity
        image
        description
    }
  }
`;

export const QUERY_BACKGROUND = gql`
  query getBackground($name: String!) {
    getBackground(name: $name) {
      _id
      playbook
      name
      description
    }
  }
`;

export const QUERY_BACKGROUNDS = gql`
  query getBackgrounds($playbook: String!) {
    getBackgrounds(playbook: $playbook) {
      _id
      playbook
      name
      description
    }
  }
`;

export const QUERY_DRIVE = gql`
  query getDrive($name: String!, $playbook: String!) {
    getDrive(name: $name, playbook: $playbook) {
      _id
      playbook
      name
      description
    }
  }
`;

export const QUERY_DRIVES = gql`
  query getDrives($playbook: String!) {
    getDrives(playbook: $playbook) {
      _id
      playbook
      name
      description
    }
  }
`;

export const QUERY_ORIGIN = gql`
  query getOrigin($playbook: String!) {
    getOrigin(playbook: $playbook) {
      _id
      playbook
      location
      names
    }
  }
`;

export const QUERY_MOVES = gql`
  query getMoves($playbook: String!) {
    getMoves(playbook: $playbook) {
      _id
      playbook
      name
      description
    }
  }
`;

export const QUERY_USER = gql`
  query getUser($username: String!) {
    getUser(username: $username) {
      _id
      username
      email
      characters {
        _id
        playbook
        background
        name
      }
    }
  }
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      characters {
        _id
        playbook
        background
        name
      }
    }
  }
`;
