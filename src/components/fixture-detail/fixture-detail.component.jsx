import React from 'react';

import {
  Title,
  FixtureDetailContainer
} from './fixture-detail.styles.jsx';

import FixtureDetailItem from '../fixture-detail-item/fixture-detail-item.component';

const FixtureDetail = ({matches, title, isAdmin, selectedId}) => {
  return (
      <FixtureDetailContainer>
          <Title>{title}</Title>
          {
            !!matches ? 
            matches
            .filter((match, id) => id === selectedId - 1)
            .map((match) =>  (
              <FixtureDetailItem key={match.id} id={match.id} match={match} isAdmin={isAdmin}/>
            )) : null
          }
      </FixtureDetailContainer>
  )
}


export default FixtureDetail;