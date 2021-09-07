import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PLAYBOOKS } from '../utils/queries';
import $ from 'jquery';

export default function Playbook() {

  $(document).ready(function () {
    window.scrollTo(0, 0);
  })

  $(document).ready(function () {
    $(".playbook-btn").click(function () {
      resetData();
      let playbook = $(this).data("playbook");
      setHP(playbook);
      setDamage(playbook);
      setImage(playbook);
      localStorage.setItem('playbook', playbook);
      window.location.reload();
    })
  })

  let selectedPlaybook = localStorage.getItem('playbook');

  if (selectedPlaybook) {
    console.log(selectedPlaybook);
    $(`#${selectedPlaybook}`).addClass("selected");
  }

  $(document).ready(function () {
    $(".next").click(function () {
      window.location.replace('/make#background');
      window.location.reload();
    })
  })

  function resetData() {
    window.localStorage.removeItem("maxHP");
    window.localStorage.removeItem("currentHP");
    window.localStorage.removeItem("damage");
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
  }

  function setHP(playbook) {
    if (playbook === "The Fox" || playbook === "The Seeker" || playbook === "The Would-Be-Hero") {
      let maxHP = 16;
      let currentHP = 16;
      localStorage.setItem('maxHP', maxHP);
      localStorage.setItem('currentHP', currentHP);
    }
    if (playbook === "The Blessed" || playbook === "The Lightbearer" || playbook === "The Ranger") {
      let maxHP = 18;
      let currentHP = 18;
      localStorage.setItem('maxHP', maxHP);
      localStorage.setItem('currentHP', currentHP);
    }
    if (playbook === "The Heavy" || playbook === "The Judge" || playbook === "The Marshal") {
      let maxHP = 20;
      let currentHP = 20;
      localStorage.setItem('maxHP', maxHP);
      localStorage.setItem('currentHP', currentHP);
    }
  }

  function setDamage(playbook) {
    if (playbook === "The Lightbearer") {
      let damage = 4;
      localStorage.setItem('damage', damage);
    }
    if (playbook === "The Blessed" || playbook === "The Judge" || playbook === "The Seeker" || playbook === "The Would-Be-Hero") {
      let damage = 6;
      localStorage.setItem('damage', damage);
    }
    if (playbook === "The Fox" || playbook === "The Marshal" || playbook === "The Ranger") {
      let damage = 8;
      localStorage.setItem('damage', damage);
    }
    if (playbook === "The Heavy") {
      let damage = 10;
      localStorage.setItem('damage', damage);
    }
  }

  function setImage(playbook) {
    let image = playbook.split(" ");
    image = image[1].toLowerCase();
    image = `../img/icon-${image}.png`;
    localStorage.setItem('image', image);
  }

  const { data } = useQuery(QUERY_PLAYBOOKS);

  const playbooks = data?.getPlaybooks || [];

  const listOfPlaybooks = playbooks.map(playbook => {
    return <div className="playbook card" id={playbook.name} key={playbook._id}>
      <h2>{playbook.name}</h2>
      <h3>{playbook.complexity}</h3>
      <h3>HP: {playbook.hp}</h3>
      <h3>Damage: d{playbook.damage}</h3>
      <div className="playbook-image-container">
        <img src={playbook.image} className="playbook-image" alt="Icon"></img>
      </div>
      <p>{playbook.description}</p>
      <button data-playbook={playbook.name} className="playbook-btn">Select</button>
    </div>
  })

  return (
    <div className="content">
        <div className="prev-next-btn-container">
          <button className="next btn-inverse">Next</button>
        </div>
        <h2 className="playbook-title">Get started by choosing a playbook below!</h2>
      <div className="playbook-container">
        {listOfPlaybooks}
      </div>
    </div>
  );
}