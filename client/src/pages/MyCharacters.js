import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { useParams, Link } from 'react-router-dom';
import icon from '../img/icon-blessed.png';
import Auth from '../utils/auth';

export default function MyCharacters() {

    if (!Auth.loggedIn) {
        window.location.assign('/');
    }

    const { username: userParam } = useParams();

    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam }
    });
  
    const user = data?.me || data?.user || {};
  
    const characters = user?.characters || [];

    let listOfCharacters;

    if (characters.length === 0) {
        listOfCharacters = <h2><em>You don't have any characters yet!</em></h2>
    } else {
        listOfCharacters = characters.map(character => {
            return <div className="character-card card" key={character._id}>
                <h2>{character.name} {character.playbook}</h2>
                <h3>Background: {character.background}</h3>
                <h3>Level {character.level}</h3>
                <div className="playbook-image-container">
                    <img src={icon} className="playbook-image" alt="Icon"></img>
                </div>
                <Link to={`/characters/${character._id}`}>
                    <button data-id={character._id} className="character-btn">Select</button>
                </Link>
            </div>
        })
    }

    return (
        <div className="content">
            <h2 className="my-characters-title">My Characters</h2>
            <div className="character-card-container">
                {listOfCharacters}
            </div>
        </div>
    )
}