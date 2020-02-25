import React from 'react';
import Select from 'react-select';

import { Dropdown } from 'semantic-ui-react'
import {
  HomePageContainer,
  StyledSelect
} from './homepage.styles.jsx';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class HomePage extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <form>
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        required
      />
      <button type="submit"></button>
      </form>
    );
  }
}

export default HomePage;