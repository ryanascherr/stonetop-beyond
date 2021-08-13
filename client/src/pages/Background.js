import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BACKGROUND } from '../utils/queries';

export default function Background() {

  const { data } = useQuery(QUERY_BACKGROUND, {
    variables: { playbook: "The Heavy" }
  });
  console.log(data);
  const backgrounds = data?.getBackground || [];

  const listOfBackgrounds = backgrounds.map(background => {
    return <div className="background" key={background._id}>
      <h2>{background.name}</h2>
      <div dangerouslySetInnerHTML={{__html: background.description}}></div>
      <button>Select</button>
    </div>
  })

  return (
    <div className="content">
      <div className="background-container">
        {listOfBackgrounds}
      </div>
    </div>
  );
}