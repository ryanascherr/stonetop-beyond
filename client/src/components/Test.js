import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME, QUERY_CHARACTER } from '../utils/queries';
import { Redirect, useParams } from 'react-router-dom';
import $ from 'jquery';

const Test = () => {

  // const { username: userParam } = useParams();

  // let { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });

  // console.log(data);

  // const user = data?.me || data?.user || {};
  // // redirect to personal profile page if username is yours

  // console.log(user.username);

  // let { data } = useQuery(QUERY_CHARACTER, {
  //   variables: { characterCreator: user.username }
  // });

  // const currentCharacter = data?.getCharacter || [];

  // const listOfCharacters = currentCharacter.map(character => {
  //   return <div className="">
  //     <button>{character.name}</button>
  //   </div>
  // })

return (
    
    <div className="content">
        <h2>Hey!</h2>
        {/* {user.username}
        {listOfCharacters} */}
    </div>
    );
}

export default Test;