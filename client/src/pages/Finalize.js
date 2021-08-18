import React from 'react';
import $ from 'jquery';
import QueryPlaybook from '../components/QueryPlaybook';
import QueryBackground from '../components/QueryBackground';
import QueryDrive from '../components/QueryDrive';
import { ADD_CHARACTER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

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
    if (!playbook || !background || !drive || !origin || !str) {
      $(".finalize-title").text("Make sure to choose a playbook, background, drive, origin, name, and stats!");
    } else {
      $(".finalize-title").text("Review the information below and finalize your character when you're ready!");
      $(".finalize-container").removeClass("hidden");
    }
  })

  const [addCharacter] = useMutation(ADD_CHARACTER);

  const handleCreateCharacter = async () => {
    console.log("hey");
    try {
      const { data } = await addCharacter({
        variables: {
          playbook: playbook,
          background: background,
          drive: drive,
          origin: origin,
          name: name,
          str: str,
          dex: dex,
          int: int,
          wis: wis,
          con: con,
          cha: cha
          // characterCreator: Auth.getProfile().data.username,
        },
      });

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="content">
      <h2 className="finalize-title"> </h2>
      <div className="finalize-container hidden">
        <div className="character-review">
          <div>
            <h2>Name:</h2>
            <h2 className="finalize-card"><i>{name}</i></h2>
          </div>
          <div>
            <h2>Origin:</h2>
            <h2 className="finalize-card"><i>{origin}</i></h2>
          </div>
          <div>
            <h2>Playbook:</h2>
            <QueryPlaybook></QueryPlaybook>
          </div>
          <div>
            <h2>Background:</h2>
            <QueryBackground></QueryBackground>
          </div>
          <div>
          <h2>Drive:</h2>
          <QueryDrive></QueryDrive>
          </div>
          <div>
            <h2>Stats:</h2>
            <div className="stat-container">
              <div className="stat">
                <h2>Strength: {str}</h2>
              </div>
              <div className="stat">
                <h2>Dexterity: {dex}</h2>
              </div>
              <div className="stat">
                <h2>Intelligence: {int}</h2>
              </div>
              <div className="stat">
                <h2>Wisdom: {wis}</h2>
              </div>
              <div className="stat">
                <h2>Constitution: {con}</h2>
              </div>
              <div className="stat">
                <h2>Charisma: {cha}</h2>
              </div>
            </div>
          </div>
          <div className="btn-container">
            <button className="finalize-btn" onClick={handleCreateCharacter}>Create Your Character</button>
          </div>
        </div>
      </div>
    </div>
  );
}