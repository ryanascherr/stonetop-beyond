import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BACKGROUNDS } from '../utils/queries';
import $ from 'jquery';

export default function Background() {

  $(document).ready(function () {
    window.scrollTo(0, 0);
  })

  $(document).ready(function () {
    $(".background-btn").click(function () {
      let background = $(this).data("background");
      console.log(background);
      localStorage.setItem('background', background);
      // $(".background").removeClass("selected");
      // $(this).parent().addClass("selected");
      window.location.reload();
    })
  })

  let playbook = localStorage.getItem('playbook');

  $(document).ready(function () {
  if (!playbook) {
    $(".background-title").text("Pick a playbook first!");
    $(".background-title2").text("");
  } else {
    $(".background-title").text("Choose one of the backgrounds below!");
    $(".background-title2").text("Backgrounds grant you unique abilities and/or moves!");
  }
  })

  const { data } = useQuery(QUERY_BACKGROUNDS, {
    variables: { playbook: playbook }
  });

  const backgrounds = data?.getBackgrounds || [];

  const listOfBackgrounds = backgrounds.map(background => {
    return <div className="background card" key={background._id}>
      <h2>{background.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: background.description }}></div>
      <button className="background-btn" data-background={background.name}>Select</button>
    </div>
  })

  return (
    <div className="content">
      <h2 className="background-title"> </h2>
      <h2 className="background-title2"> </h2>
      <div className="background-container">
        {listOfBackgrounds}
      </div>
    </div>
  );
}