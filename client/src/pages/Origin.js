import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ORIGIN } from '../utils/queries';
import $ from 'jquery';

export default function Origin() {

  // $(document).ready(function () {
  //   $(".origin-btn").click(function () {
  //     let origin = $(this).data("origin");
  //     console.log(origin);
  //     localStorage.setItem('origin', origin);
  //     $(this).addClass("selected");
  //   })
  // })

  let playbook = localStorage.getItem('playbook');

  const { data } = useQuery(QUERY_ORIGIN, {
    variables: { playbook: playbook }
  });
  console.log(data);
  const origins = data?.getOrigin || [];

  const originDropdown = origins.map(origin => {
    return <option key={origin._id} value={origin.location}>{origin.location}</option>
  })

  const listOfOrigins = origins.map(origin => {
    return <div className="origin" key={origin._id}>
      <h2>{origin.location}</h2>
      <p>{origin.names}</p>
    </div>
  })

  return (
    <div className="content">
      <h2>Pick one origin and a name to match (or make up something similar)!</h2>
      <h3>Choose a place of origin</h3>
      <select>
        <option value="-">-</option>
        {originDropdown}
      </select>
      <h3>Choose a name</h3>
      <input type="text" name="" id=""></input>
      <button className="origin-btn">Select</button>
      <div className="origin-container">
        {listOfOrigins}
      </div>
    </div>
  );
}