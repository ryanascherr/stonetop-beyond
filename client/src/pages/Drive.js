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
    })
  })

  const { data } = useQuery(QUERY_DRIVE, {
    variables: { playbook: "The Heavy" }
  });
  console.log(data);
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
      <h2>Choose one of the drives below!</h2>
      <h3>You gain experience by following your drive</h3>
      <div className="drive-container">
        {listOfDrives}
      </div>
    </div>
  );
}