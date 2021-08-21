import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHARACTER = gql`
  mutation addCharacter($playbook: String!, $background: String!, $drive: String!, $origin: String!, $name: String!, $str: String!, $dex: String!, $int: String!, $wis: String!, $con: String!, $cha: String!, $maxHP: String!, $currentHP: String!, $damage: String!, $level: String!, $exp: String! ) {
    addCharacter(playbook: $playbook, background: $background, drive: $drive, origin: $origin, name: $name, str: $str, dex: $dex, int: $int, wis: $wis, con: $con, cha: $cha, maxHP: $maxHP, currentHP: $currentHP, damage: $damage, level: $level, exp: $exp ) {
        _id
        playbook
    }
  }
`;