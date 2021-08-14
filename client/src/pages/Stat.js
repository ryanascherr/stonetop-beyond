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
      localStorage.setItem('str', str);
      localStorage.setItem('dex', dex);
      localStorage.setItem('int', int);
      localStorage.setItem('wis', wis);
      localStorage.setItem('con', con);
      localStorage.setItem('cha', cha);
    })
  })

  let stats;

  let playbook = localStorage.getItem('playbook');

  $(document).ready(function () {
  if (!playbook) {
    $(".stat-title").text("Pick a playbook first!");
  } else if (playbook == "The Would-Be-Hero") {
    $(".stat-title").text("Apply each of the following numbers to one of the stats below: +1, +0, +0, +0, +0, -1");
  } else {
    $(".stat-title").text("Apply each of the following numbers to one of the stats below: +2, +1, +1, +0, +0, -1");
  }
  })

  return (
    <div className="content">
      <h2 className="stat-title"></h2>
      <div className="stat-container">
        <div className="stat">
          <h2>STR</h2>
          <select className="origin-select str">
            <option value="-">-</option>
            <option value="+2">+2</option>
            <option value="+1">+1</option>
            <option value="+0">+0</option>
            <option value="-1">-1</option>
          </select>
        </div>
        <div className="stat">
          <h2>DEX</h2>
          <select className="origin-select dex">
            <option value="-">-</option>
            <option value="+2">+2</option>
            <option value="+1">+1</option>
            <option value="+0">+0</option>
            <option value="-1">-1</option>
          </select>
        </div>
        <div className="stat">
          <h2>INT</h2>
          <select className="origin-select int">
            <option value="-">-</option>
            <option value="+2">+2</option>
            <option value="+1">+1</option>
            <option value="+0">+0</option>
            <option value="-1">-1</option>
          </select>
        </div>
        <div className="stat">
          <h2>WIS</h2>
          <select className="origin-select wis">
            <option value="-">-</option>
            <option value="+2">+2</option>
            <option value="+1">+1</option>
            <option value="+0">+0</option>
            <option value="-1">-1</option>
          </select>
        </div>
        <div className="stat">
          <h2>CON</h2>
          <select className="origin-select con">
            <option value="-">-</option>
            <option value="+2">+2</option>
            <option value="+1">+1</option>
            <option value="+0">+0</option>
            <option value="-1">-1</option>
          </select>
        </div>
        <div className="stat">
          <h2>CHA</h2>
          <select className="origin-select cha">
            <option value="-">-</option>
            <option value="+2">+2</option>
            <option value="+1">+1</option>
            <option value="+0">+0</option>
            <option value="-1">-1</option>
          </select>
        </div>
      </div>
      <div className="btn-container">
        <button className="stat-btn">Select</button>
      </div>
    </div>
  );
}