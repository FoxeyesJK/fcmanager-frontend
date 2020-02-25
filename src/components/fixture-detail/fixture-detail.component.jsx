import React from 'react';

import {
  Title,
  FixtureDetailContainer
} from './fixture-detail.styles.jsx';

import FixtureDetailItem from '../fixture-detail-item/fixture-detail-item.component';

const FixtureDetail = () => {
  return (
      <FixtureDetailContainer>
        <FixtureDetailItem /> 
      </FixtureDetailContainer>
  )
}


export default FixtureDetail;