import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MOVES } from '../utils/queries';

export default function BasicMoves() {

  const { data } = useQuery(QUERY_MOVES, {
    variables: { playbook: "Basic" }
  });
  
  const basicMoves = data?.getMoves || [];

  const listOfMoves = basicMoves.map(move => {
    return <div className="move" key={move._id}>
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