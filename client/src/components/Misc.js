import React from 'react';
import { QUERY_CHARACTER } from '../utils/queries';
import { useQuery } from '@apollo/client';
import CurrentBackground from './QueryBackground';
import CurrentDrive from './QueryDrive';

export default function Misc() {

  let id = localStorage.getItem('id');

  if (!id) {
    window.location.assign('/');
  }

  let { data } = useQuery(QUERY_CHARACTER, {
    variables: { _id: id }
  });

  const character = data?.getCharacter || [];

  localStorage.setItem('drive', character.drive);

  localStorage.setItem('playbook', character.playbook);

  localStorage.setItem('background', character.background);

  return (
    <div className="content">
      <h1>Misc</h1>
      <div className="misc-container">
        <div>
          <h2>Origin:</h2>
          <h2 className="finalize-card"><i>{character.origin}</i></h2>
        </div>
        <h2>Background:</h2>
        <CurrentBackground></CurrentBackground>
        <h2>Drive:</h2>
        <CurrentDrive></CurrentDrive>
      </div>
    </div>
  );
}