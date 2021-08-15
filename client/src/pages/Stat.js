import React from 'react';
import $ from 'jquery';

export default function Stat() {

  $(document).ready(function () {
    $(".stat-btn").click(function () {
      let str = $(".str").val();
      let dex = $(".dex").val();
      let int = $(".int").val();
      let wis = $(".wis").val();
      let con = $(".con").val();
      let cha = $(".cha").val();
      if (str !== "-" && dex !== "-" && int !== "-" && wis !== "-" && con !== "-" && cha !== "-") {
        localStorage.setItem('str', str);
        localStorage.setItem('dex', dex);
        localStorage.setItem('int', int);
        localStorage.setItem('wis', wis);
        localStorage.setItem('con', con);
        localStorage.setItem('cha', cha);
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
        });
        window.location.reload();
      } else {
        alert("Please choose a number for all of your stats!");
      }
    })
  })

  let playbook = localStorage.getItem('playbook');

  $(document).ready(function () {
  if (!playbook) {
    $(".stat-title").text("Pick a playbook first!");
  } else if (playbook === "The Would-Be-Hero") {
    $(".stat-title").text("Apply each of the following numbers to one of the stats below: +1, +0, +0, +0, +0, -1");
  } else {
    $(".stat-title").text("Apply each of the following numbers to one of the stats below: +2, +1, +1, +0, +0, -1");
  }
  })

  return (
    <div className="content">
      <h2 className="stat-title"> </h2>
      <div className="stat-container">
        <div className="stat">
          <h2>Strength</h2>
          <select className="origin-select str">
            <option value="-">-</option>
            <option value="+2">+2</option>
            <option value="+1">+1</option>
            <option value="+0">+0</option>
            <option value="-1">-1</option>
          </select>
          <p>Used to Clash, as well as Defy Danger or Interfere by powering through or testing your might.</p>
        </div>
        <div className="stat">
          <h2>Dexterity</h2>
          <select className="origin-select dex">
            <option value="-">-</option>
            <option value="+2">+2</option>
            <option value="+1">+1</option>
            <option value="+0">+0</option>
            <option value="-1">-1</option>
          </select>
          <p>Used to Let Fly, as well as Defy Danger or Interfere by employing speed agility, or finesse.</p>
        </div>
        <div className="stat">
          <h2>Intelligence</h2>
          <select className="origin-select int">
            <option value="-">-</option>
            <option value="+2">+2</option>
            <option value="+1">+1</option>
            <option value="+0">+0</option>
            <option value="-1">-1</option>
          </select>
          <p>Used to Know Things, as well as Defy Danger or Interfere by applying expertise or enacting a clever plan.</p>
        </div>
        <div className="stat">
          <h2>Wisdom</h2>
          <select className="origin-select wis">
            <option value="-">-</option>
            <option value="+2">+2</option>
            <option value="+1">+1</option>
            <option value="+0">+0</option>
            <option value="-1">-1</option>
          </select>
          <p>Used to Seek Insight, as well as Defy Danger or Interfere by exerting willpower or replying on your senses.</p>
        </div>
        <div className="stat">
          <h2>Constitution</h2>
          <select className="origin-select con">
            <option value="-">-</option>
            <option value="+2">+2</option>
            <option value="+1">+1</option>
            <option value="+0">+0</option>
            <option value="-1">-1</option>
          </select>
          <p>Used to Defend, as well as Defy Danger or Interfere by enduring or holding steady.</p>
        </div>
        <div className="stat">
          <h2>Charisma</h2>
          <select className="origin-select cha">
            <option value="-">-</option>
            <option value="+2">+2</option>
            <option value="+1">+1</option>
            <option value="+0">+0</option>
            <option value="-1">-1</option>
          </select>
          <p>Used to Persuade NPCs and Persuade PCs, as well as Defy Danger or Interfere by charming, bluffing, impressing, or fitting in.</p>
        </div>
      </div>
      <div className="btn-container">
        <button className="stat-btn">Select</button>
      </div>
    </div>
  );
}