import React from 'react';

import {
  Title,
  FixtureDetailContainer
} from './fixture-detail.styles.jsx';

import FixtureDetailItem from '../fixture-detail-item/fixture-detail-item.component';

const FixtureDetail = ({match, isAdmin}) => {
  return (
      <FixtureDetailContainer>
        <Title></Title>
        {
          !!match 
          ? <FixtureDetailItem match={match} isAdmin={isAdmin}/> 
          : null
        }
      </FixtureDetailContainer>
  )
}


export default FixtureDetail;