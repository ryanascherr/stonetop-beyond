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
  query getDrive($playbook: String!) {
    getDrive(playbook: $playbook) {
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