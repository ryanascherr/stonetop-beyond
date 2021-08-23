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
  mutation addCharacter($playbook: String!, $background: String!, $drive: String!, $origin: String!, $name: String!, $str: String!, $dex: String!, $int: String!, $wis: String!, $con: String!, $cha: String!, $maxHP: String!, $currentHP: String!, $damage: String!, $level: String!, $exp: String!, $armor: String!) {
    addCharacter(playbook: $playbook, background: $background, drive: $drive, origin: $origin, name: $name, str: $str, dex: $dex, int: $int, wis: $wis, con: $con, cha: $cha, maxHP: $maxHP, currentHP: $currentHP, damage: $damage, level: $level, exp: $exp, armor: $armor) {
        _id
        playbook
    }
  }
`;

export const UPDATE_CHARACTER_NAME = gql`
  mutation updateCharacterName($_id: ID!, $name: String!) {
    updateCharacterName(_id: $_id, name: $name) {
      _id
      playbook
      name
    }
  }
`;

export const UPDATE_CHARACTER_CURRENT_HP = gql`
  mutation updateCharacterCurrentHP($_id: ID!, $currentHP: String!) {
    updateCharacterCurrentHP(_id: $_id, currentHP: $currentHP) {
      _id
      playbook
      name
      currentHP
    }
  }
`;

export const UPDATE_CHARACTER_ARMOR = gql`
  mutation updateCharacterArmor($_id: ID!, $armor: String!) {
    updateCharacterArmor(_id: $_id, armor: $armor) {
      _id
      playbook
      name
      armor
    }
  }
`;

export const UPDATE_CHARACTER_EXP = gql`
  mutation updateCharacterExp($_id: ID!, $exp: String!) {
    updateCharacterExp(_id: $_id, exp: $exp) {
      _id
      playbook
      name
      exp
    }
  }
`;

export const UPDATE_CHARACTER_LEVEL = gql`
  mutation updateCharacterLevel($_id: ID!, $level: String!) {
    updateCharacterLevel(_id: $_id, level: $level) {
      _id
      playbook
      name
      level
    }
  }
`;

export const DELETE_CHARACTER = gql`
  mutation deleteCharacter($_id: ID!) {
    deleteCharacter(_id: $_id) {
      _id
      playbook
      name
    }
  }
`;
