import React from 'react';
import $ from 'jquery';
import QueryPlaybook from './QueryPlaybook';
import QueryBackground from './QueryBackground';
import QueryDrive from './QueryDrive';
import { ADD_CHARACTER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

export default function Finalize() {

  let hp = localStorage.getItem('maxHP');
  let damage = localStorage.getItem('damage');
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
  let level = "1";
  let exp = "0";
  let armor = "0";
  let image = localStorage.getItem('image');

  $(document).ready(function () {
    if (!playbook || !background || !drive || !origin || !str) {
      $(".finalize-title").text("Make sure to choose a playbook, background, drive, origin, name, and stats!");
    } else {
      $(".finalize-title").text("Review the information below and finalize your character when you're ready!");
      $(".finalize-container").removeClass("hidden");
    }
  })

  $(document).ready(function () {
    $(".prev").click(function () {
      window.location.replace('/make#stat');
      window.location.reload();
    })
  })

  const [addCharacter] = useMutation(ADD_CHARACTER);

  const handleCreateCharacter = async () => {
    
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
          cha: cha,
          maxHP: hp,
          currentHP: hp,
          damage: damage,
          level: level,
          exp: exp,
          armor: armor,
          image: image,
          // characterCreator: Auth.getProfile().data.username,
        },
        
      });
      window.localStorage.removeItem("armor");
      window.localStorage.removeItem("level");
      window.localStorage.removeItem("exp");
      window.localStorage.removeItem("currentHP");
      window.localStorage.removeItem("damage");
      window.localStorage.removeItem("playbook");
      window.localStorage.removeItem("background");
      window.localStorage.removeItem("drive");
      window.localStorage.removeItem("origin");
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("str");
      window.localStorage.removeItem("dex");
      window.localStorage.removeItem("int");
      window.localStorage.removeItem("wis");
      window.localStorage.removeItem("con");
      window.localStorage.removeItem("cha");
      window.localStorage.removeItem("image");
      window.location.assign('/my-characters');

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="content">
      <div className="prev-next-btn-container">
          <button className="prev btn-inverse">Prev</button>
      </div>
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
            <div className="stat-container fin-stat">
              <div className="card">
                <h2>Strength: {str}</h2>
              </div>
              <div className="stat card">
                <h2>Dexterity: {dex}</h2>
              </div>
              <div className="stat card">
                <h2>Intelligence: {int}</h2>
              </div>
              <div className="stat card">
                <h2>Wisdom: {wis}</h2>
              </div>
              <div className="stat card">
                <h2>Constitution: {con}</h2>
              </div>
              <div className="stat card">
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