import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { toggleLeagueHidden } from '../../redux/league/league.actions';

import {
   Dropdown,
   StyledSelect
} from './custom-dropdown.styles.jsx';

const customStyles = {
   control: (base) => ({
      ...base,
      minHeight: 10,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    clearIndicator: (base) => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 0,
    }),
 }

const options = [
   { value: 'chocolate', label: 'Chocolate' },
   { value: 'strawberry', label: 'Strawberry' },
   { value: 'vanilla', label: 'Vanilla' },
   { value: 'chocolate', label: 'Chocolate' },
   { value: 'strawberry', label: 'Strawberry' },
   { value: 'vanilla', label: 'Vanilla' }
 ]

const CustomDropdown = ({ toggleLeagueHidden }) => {
   return (
   <Dropdown>
      <StyledSelect
         //  minMenuHeight={10} 
         //  maxMenuHeight={10}
         styles={customStyles}
         options={options} 
      />
   </Dropdown>
   );
};

export default CustomDropdown;

// const mapDispatchToProps = dispatch => ({
//    toggleLeagueHidden: () => dispatch(toggleLeagueHidden())
// });

// export default connect(null, mapDispatchToProps)(CustomDropdown);
