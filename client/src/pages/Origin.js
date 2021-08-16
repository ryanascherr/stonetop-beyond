import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ORIGIN } from '../utils/queries';
import $ from 'jquery';

export default function Origin() {

  $(document).ready(function () {
    window.scrollTo(0, 0);
  })

  $(document).ready(function () {
    $(".origin-btn").click(function () {
      let origin = $(".origin-select").val();
      let name = $(".origin-name").val().trim();
      if (origin === "-" || name === "" || !name) {
        alert("Please pick an origin and a name!");
      } else {
        localStorage.setItem('origin', origin);
        localStorage.setItem('name', name);
        window.location.reload();
      }
    })
  })

  let playbook = localStorage.getItem('playbook');
  
  $(document).ready(function () {
    if (!playbook) {
      $(".origin-title").text("Pick a playbook first!");
    } else {
      $(".origin-title").text("Pick one origin and a name to match (or make up something similar)!");
      $(".test").removeClass("hidden");
    }
  })

  const { data } = useQuery(QUERY_ORIGIN, {
    variables: { playbook: playbook }
  });

  const origins = data?.getOrigin || [];

  const originDropdown = origins.map(origin => {
    return <option key={origin._id} value={origin.location}>{origin.location}</option>
  })

  const listOfOrigins = origins.map(origin => {
    return <div className="origin" key={origin._id}>
      <h2>{origin.location}:</h2>
      <p>{origin.names}</p>
    </div>
  })

  return (
    <div className="content">
      <h2 className="origin-title"> </h2>
      <div className="test hidden">
        <div className="origin-options">
          <h3>Choose a place of origin:</h3>
          <select className="origin-select">
            <option value="-">-</option>
            {originDropdown}
          </select>
          <h3>Choose a name:</h3>
          <input type="text" name="" id="" className="origin-name"></input>
          <button className="origin-btn">Select</button>
        </div>
        <div className="origin-container">
          {listOfOrigins}
        </div>
      </div>
    </div>
  );
}