import React from 'react';
import Auth from '../utils/auth';

export default function Moves() {

  if (!Auth.loggedIn) {
    window.location.assign('/');
  }

  let move1 = localStorage.getItem('starterMoves');

  move1 = JSON.stringify(move1).split(",")

  console.log(move1);

  const listOfMoves = move1.forEach(move => {
    <div>move</div>;
  });

  return (
    <div className="content">
      <h1>Moves</h1>
      {listOfMoves}
    </div>
  );
}