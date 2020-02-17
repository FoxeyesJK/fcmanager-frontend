import React from 'react';

import {
  Title,
  FixtureDetailContainer
} from './fixture-detail.styles.jsx';

import FixtureDetailItem from '../fixture-detail-item/fixture-detail-item.component';

const FixtureDetail = ({isAdmin}) => {
  return (
      <FixtureDetailContainer>
        {console.log('fixtureDetail')}
        <Title></Title>
 
        <FixtureDetailItem isAdmin={isAdmin}/> 

      </FixtureDetailContainer>
  )
}


export default FixtureDetail;