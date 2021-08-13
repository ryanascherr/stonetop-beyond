import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BACKGROUND, } from '../utils/queries';

export default function Background() {

  const { data } = useQuery(QUERY_BACKGROUND, {
    variables: { playbook: "The Blessed" }
  });
  console.log(data);
  const background = data?.getBackground || [];

  return (
    <div className="content">
      <div className="background-container">
        <div className="background">
          <h2>{background.name}</h2>
          <div dangerouslySetInnerHTML={{__html: background.description}}></div>
          <button>Select</button>
        </div>
      </div>
    </div>
  );
}