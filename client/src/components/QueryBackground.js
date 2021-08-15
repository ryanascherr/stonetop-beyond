import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BACKGROUND } from '../utils/queries';

const QueryBackground = () => {

let background = localStorage.getItem('background');

let { data } = useQuery(QUERY_BACKGROUND, {
  variables: { name: background }
});

const selectedBackground = data?.getBackground || [];

const listOfBackgrounds = selectedBackground.map(background => {
    return <div className="finalize-background" key={background._id}>
      <h2>{background.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: background.description }}></div>
      <button className="background-btn" data-background={background.name}>Select</button>
    </div>
  })

return (
    <div>
        {listOfBackgrounds}
    </div>
)

}

export default QueryBackground;