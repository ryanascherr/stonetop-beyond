import { gql } from '@apollo/client';

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
  query getBackground($playbook: String!) {
    getBackground(playbook: $playbook) {
      _id
      playbook
      name
      description
    }
  }
`;