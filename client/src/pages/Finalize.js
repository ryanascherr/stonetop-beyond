import React from 'react';
import $ from 'jquery';
// import { useQuery } from '@apollo/client';
// import { QUERY_BACKGROUND, QUERY_DRIVE } from '../utils/queries';

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

  return (
    <div className="content">
      <h2 className="finalize-title"></h2>
      <div className="character-review hidden">
        <h3>Playbook: {playbook}</h3>
        <h3>Background: {background}</h3>
        <h3>Drive: {drive}</h3>
        <h3>Name: {name}</h3>
        <h3>Origin: {origin}</h3>
        <h3>Strength: {str}</h3>
        <h3>Dexterity: {dex}</h3>
        <h3>Intelligence: {int}</h3>
        <h3>Wisdom: {wis}</h3>
        <h3>Constitution: {con}</h3>
        <h3>Charisma: {cha}</h3>
      </div>
    </div>
  );
}