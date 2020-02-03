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


const CustomDropdown = ({ handleChange, value, options, ...otherProps }) => {
   return (
   <Dropdown>
      <StyledSelect
         value=
         {
            {
            value: value, 
            label: 
               !!options ? options
                  .find(option => option.value == value).label
                  : null
            }
         }
         styles={customStyles}
         options={options} 
         onChange={handleChange}
         {...otherProps}
      />
   </Dropdown>
   );
};

export default CustomDropdown;

