import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DRIVE } from '../utils/queries';
import $ from 'jquery';

export default function Drive() {

  $(document).ready(function () {
    $(".drive-btn").click(function () {
      let drive = $(this).data("drive");
      console.log(drive);
      localStorage.setItem('drive', drive);
      $(".drive").removeClass("selected");
      $(this).parent().addClass("selected");
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
    })
  })

  let playbook = localStorage.getItem('playbook');

  $(document).ready(function () {
  if (!playbook) {
    $(".drive-title").text("Pick a playbook first!");
  } else {
    $(".drive-title").text("Choose one of the drives below!");
  }
  })

  const { data } = useQuery(QUERY_DRIVE, {
    variables: { playbook: playbook }
  });
  
  const drives = data?.getDrive || [];

  const listOfDrives = drives.map(drive => {
    return <div className="drive" key={drive._id}>
      <h2>{drive.name}</h2>
      <p>{drive.description}</p>
      <button className="drive-btn" data-drive={drive.name}>Select</button>
    </div>
  })

  return (
    <div className="content">
      <h2 className="drive-title"></h2>
      <div className="drive-container">
        {listOfDrives}
      </div>
    </div>
  );
}