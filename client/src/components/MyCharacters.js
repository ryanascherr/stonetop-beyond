import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTERS } from '../utils/queries';
import icon from '../img/icon-blessed.png';
import $ from 'jquery';
import { Link } from 'react-router-dom';

function MyCharacters() {

    // function goToCharacter() {
    //     let id = $(this).data("id");
    //     console.log(id);
    // }

    $(document).ready(function () {
        $(".character-btn").click(function () {
          let id = $(this).data("id");
          console.log(id);
          localStorage.setItem('id', id);
        //   $(".playbook").removeClass("selected");
        //   $(this).parent().addClass("selected");
        //   window.location.reload();
        })
      })

    let listOfCharacters;

    let username = localStorage.getItem('username');

    let { data } = useQuery(QUERY_CHARACTERS, {
        variables: { characterCreator: username }
    });

    const currentCharacter = data?.getCharacters || [];

    if (currentCharacter.length === 0) {
        listOfCharacters = <h2>You don't have any character yet!</h2>
    } else {
        listOfCharacters = currentCharacter.map(character => {
            return <div className="character-card" key={character._id}>
                <h2>{character.name} {character.playbook}</h2>
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