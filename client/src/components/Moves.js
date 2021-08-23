import React from 'react';
import { QUERY_CHARACTER, QUERY_MOVES } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

export default function Moves() {

    let playbook = localStorage.getItem("playbook");

    let { data } = useQuery(QUERY_MOVES, {
      variables: { playbook: playbook }
  });

    const moves = data?.getMoves || [];

    const listOfMoves = moves.map(move => {
      return <div className="move card" key={move._id}>
        <h2>{move.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: move.description }}></div>
      </div>
    })

  return (
      <div className="content">
        <h1>{playbook} Moves</h1>
        <div className="move-container">
          {listOfMoves}
        </div>
      </div>
  )
}