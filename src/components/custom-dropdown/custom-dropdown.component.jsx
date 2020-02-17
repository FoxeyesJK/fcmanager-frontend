import React, { useState, useEffect, useRef } from 'react';

import { connect } from 'react-redux';

import { toggleLeagueHidden } from '../../redux/league/league.actions';

import {
   Dropdown,
   StyledSelect,
   RequiredInput
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


const CustomDropdown = ({ handleChange, value, options, isEmptySelectable, ...otherProps }) => {

   return (
   <Dropdown>
      <StyledSelect
         value=
         {
            value > 0 ? 
            {
            value: value, 
            label: 
               !!options ? options
                  .find(option => option.value == value).label
                  : null
            } : null
         }
         styles={customStyles}
         options={isEmptySelectable ? [{ value: '', label: 'Select...'}, ...options] : options} 
         onChange={handleChange}
         {...otherProps}
      />
      <RequiredInput
         autoComplete="off"
         value=
         {
            value > 0 ? 
            {
            value: value, 
            label: 
               !!options ? options
                  .find(option => option.value == value).label
                  : null
            } : null
         }
         required
      />
   </Dropdown>
   );
};

export default CustomDropdown;

