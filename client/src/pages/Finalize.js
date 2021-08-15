import React from 'react';
import $ from 'jquery';
import { useQuery } from '@apollo/client';
import { QUERY_BACKGROUND, QUERY_PLAYBOOK } from '../utils/queries';
import QueryPlaybook from '../components/QueryPlaybook';

export default function Finalize() {

  let playbook = localStorage.getItem('playbook');
  let background = localStorage.getItem('background');
  let drive = localStorage.getItem('drive');
  let origin = localStorage.getItem('origin');
  let name = localStorage.getItem('name');
  let str = localStorage.getItem('str');
  let dex = localStorage.getItem('dex');
  let int = localStorage.getItem('int');
  let wis = localStorage.getItem('wis');
  let con = localStorage.getItem('con');
  let cha = localStorage.getItem('cha');

  $(document).ready(function () {
    if (!playbook || !background || !drive || !origin || !name || !str || !dex || !int || !wis || !con || !cha) {
      $(".finalize-title").text("Make sure to choose a playbook, background, drive, origin, name, and stats!");
    } else {
      $(".finalize-title").text("Review the information below and finalize your character when you're ready!");
      $(".character-review").removeClass("hidden");
    }
  })

  // Playbook

  // let { data } = useQuery(QUERY_PLAYBOOK, {
  //   variables: { name: playbook }
  // });

  // const selectedPlaybook = data?.getPlaybook || [];

  // const listOfPlaybooks = selectedPlaybook.map(playbook => {
  //   return <div className="playbook" id={playbook.name} key={playbook._id}>
  //     <h2>{playbook.name}</h2>
  //     <h3>{playbook.complexity}</h3>
  //     <div className="playbook-image-container">
  //       <img src={blessedIcon} className="playbook-image" alt="Icon"></img>
  //     </div>
  //     <p>{playbook.description}</p>
  //     <button data-playbook={playbook.name} className="playbook-btn">Select</button>
  //   </div>
  // })

  // Background

  

  let { data } = useQuery(QUERY_BACKGROUND, {
    variables: { name: background }
  });

  const selectedBackground = data?.getBackground || [];

  const listOfBackgrounds = selectedBackground.map(background => {
    return <div className="background" key={background._id}>
      <h2>{background.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: background.description }}></div>
      <button className="background-btn" data-background={background.name}>Select</button>
    </div>
  })

  return (
    <div className="content">
      <h2 className="finalize-title"> </h2>
      <div className="character-review hidden">
        <h2>Playbook:</h2>
        <div><QueryPlaybook></QueryPlaybook></div>
        <h2>Background:</h2>
        <div>{listOfBackgrounds}</div>
        <h2>Drive: {drive}</h2>
        <h2>Name: {name}</h2>
        <h2>Origin: {origin}</h2>
        <h2>Strength: {str}</h2>
        <h2>Dexterity: {dex}</h2>
        <h2>Intelligence: {int}</h2>
        <h2>Wisdom: {wis}</h2>
        <h2>Constitution: {con}</h2>
        <h2>Charisma: {cha}</h2>
        <div className="btn-container">
          <button className="finalize-btn">Create Your Character</button>
        </div>
      </div>
    </div>
  );
}