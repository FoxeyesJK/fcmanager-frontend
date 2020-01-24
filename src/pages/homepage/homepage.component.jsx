import React from 'react';
import Select from 'react-select';

import Test from '../../components/test/test.component';
import { Dropdown } from 'semantic-ui-react'
import {
  HomePageContainer,
  StyledSelect
} from './homepage.styles.jsx';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const HomePage = () => (
  <HomePageContainer>
      {/* <Dropdown
    placeholder='Select Country'
    search
    selection
    options={countryOptions}
  /> */}
  <StyledSelect options={options} />
    <Test />
  </HomePageContainer>
);

export default HomePage;