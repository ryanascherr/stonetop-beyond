import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BACKGROUND } from '../utils/queries';
import $ from 'jquery';

export default function Background() {

  $(document).ready(function () {
    $(".background-btn").click(function () {
      let background = $(this).data("background");
      console.log(background);
      localStorage.setItem('background', background);
      $(".background").removeClass("selected");
      $(this).parent().addClass("selected");
    })
  })

  const { data } = useQuery(QUERY_BACKGROUND, {
    variables: { playbook: "The Heavy" }
  });
  console.log(data);
  const backgrounds = data?.getBackground || [];

  const listOfBackgrounds = backgrounds.map(background => {
    return <div className="background" key={background._id}>
      <h2>{background.name}</h2>
      <div dangerouslySetInnerHTML={{__html: background.description}}></div>
      <button className="background-btn" data-background={background.name}>Select</button>
    </div>
  })

  return (
    <div className="content">
      <h2>Choose one of the backgrounds below!</h2>
      <h3>These may give you extra moves, abilities, or resources</h3>
      <div className="background-container">
        {listOfBackgrounds}
      </div>
    </div>
  );
}