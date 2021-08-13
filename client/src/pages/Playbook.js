import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PLAYBOOKS } from '../utils/queries';
import blessedIcon from '../img/icon-blessed.png';
import $ from 'jquery';

export default function Playbook() {

  // let selectedPlaybook = JSON.stringify(localStorage.getItem('playbook'));
  // console.log(selectedPlaybook);
  // $("#"(selectedPlaybook).addClass("selected"));

  $(document).ready(function () {
    $(".playbook-btn").click(function () {
      window.localStorage.removeItem("background");
      window.localStorage.removeItem("drive");
      window.localStorage.removeItem("origin");
      let playbook = $(this).data("playbook");
      console.log(playbook);
      localStorage.setItem('playbook', playbook);
      $(".playbook").removeClass("selected");
      $(this).parent().addClass("selected");
    })
  })

  const { data } = useQuery(QUERY_PLAYBOOKS);
  console.log(data);

  const playbooks = data?.getPlaybooks || [];
  console.log(playbooks);

  const listOfPlaybooks = playbooks.map(playbook => {
    return <div className="playbook" id={playbook.name} key={playbook._id}>
      <h2>{playbook.name}</h2>
      <h3>{playbook.complexity}</h3>
      <div className="playbook-image-container">
        <img src={blessedIcon} className="playbook-image"></img>
      </div>
      <p>{playbook.description}</p>
      <button data-playbook={playbook.name} className="playbook-btn">Select</button>
    </div>
  })

  return (
    <div className="content">
      <h2>Get started by choosing a playbook below!</h2>
      <div className="playbook-container">
        {listOfPlaybooks}
      </div>
    </div>
  );
}