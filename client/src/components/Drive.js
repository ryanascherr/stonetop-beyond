import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DRIVES } from '../utils/queries';
import $ from 'jquery';

export default function Drive() {

  $(document).ready(function () {
    window.scrollTo(0, 0);
  })

  $(document).ready(function () {
    $(".drive-btn").click(function () {
      let drive = $(this).data("drive");
      console.log(drive);
      localStorage.setItem('drive', drive);
      // $(".drive").removeClass("selected");
      // $(this).parent().addClass("selected");
      window.location.reload();
    })
  })

  let playbook = localStorage.getItem('playbook');

  $(document).ready(function () {
  if (!playbook) {
    $(".drive-title").text("Pick a playbook first!");
    $(".drive-title2").text("");
  } else {
    $(".drive-title").text("Choose one of the drives below!");
    $(".drive-title2").text("Following your drive grants you XP!");
  }
  })

  const { data } = useQuery(QUERY_DRIVES, {
    variables: { playbook: playbook }
  });
  
  const drives = data?.getDrives || [];

  const listOfDrives = drives.map(drive => {
    return <div className="drive card" key={drive._id}>
      <h2>{drive.name}</h2>
      <p>{drive.description}</p>
      <button className="drive-btn" data-drive={drive.name}>Select</button>
    </div>
  })

  return (
    <div className="content">
      <h2 className="drive-title"> </h2>
      <h2 className="drive-title2"> </h2>
      <div className="drive-container">
        {listOfDrives}
      </div>
    </div>
  );
}