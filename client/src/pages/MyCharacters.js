import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTERS, QUERY_USER, QUERY_ME } from '../utils/queries';
import { Redirect, useParams } from 'react-router-dom';
import icon from '../img/icon-blessed.png';
import $ from 'jquery';
import { Link } from 'react-router-dom';

function MyCharacters() {

    $(document).ready(function () {
        $(".character-btn").click(function () {
          let id = $(this).data("id");
          localStorage.setItem('id', id);
        })
      })

    const { username: userParam } = useParams();

    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });
  
    const user = data?.me || data?.user || {};
  
    const characters = user.characters;

    let listOfCharacters;

    if (characters.length === 0) {
        listOfCharacters = <h2>You don't have any characters yet!</h2>
    } else {
        listOfCharacters = characters.map(character => {
            return <div className="character-card card" key={character._id}>
                <h2>{character.name} {character.playbook}</h2>
                <h2>Level {character.level}</h2>
                <div className="playbook-image-container">
                    <img src={icon} className="playbook-image" alt="Icon"></img>
                </div>
                <Link to={`/sheet`}>
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

export default MyCharacters;