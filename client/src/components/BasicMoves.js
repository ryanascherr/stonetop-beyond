import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MOVES } from '../utils/queries';
import Auth from '../utils/auth';

export default function BasicMoves() {

  if (!Auth.loggedIn) {
    window.location.assign('/');
  }

  const { data } = useQuery(QUERY_MOVES, {
    variables: { playbook: "Basic" }
  });
  
  const basicMoves = data?.getMoves || [];

  const listOfMoves = basicMoves.map(move => {
    return <div className="move card" key={move._id}>
      <h2>{move.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: move.description }}></div>
    </div>
  })

  return (
    <div className="content">
      <h1>Basic Moves</h1>
        <div className="move-container">
          {listOfMoves}
        </div>
    </div>
  );
}