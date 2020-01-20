import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { toggleLeagueHidden } from '../../redux/league/league.actions';

import {
   Dropdown,
   DropdownButton,
   DropdownContent,
   DropdownOption
} from './dropdown-league-contents.styles.jsx';

const DropdownLeagueContents = ({ toggleLeagueHidden }) => {
   // const [clickedOutside, setClickedOutside] = useState(false);
   // const myRef = useRef();

   // const handleClickOutside = e => {
   //     if (!myRef.current.contains(e.target)) {
   //         setClickedOutside(true);
   //     }
   // };

   // const handleClickInside = () => setClickedOutside(false);

   // useEffect(() => {
   //     document.addEventListener('mousedown', handleClickOutside);
   //     return () => document.removeEventListener('mousedown', handleClickOutside);
   // });

   return (
    <DropdownContent>
        <DropdownOption value="volvo">2020 Spring Championship League</DropdownOption>
        <DropdownOption value="saab">Saab</DropdownOption>
        <DropdownOption value="mercedes">Mercedes</DropdownOption>
        <DropdownOption value="audi">Audi</DropdownOption>
    </DropdownContent>
   );
};

const mapDispatchToProps = dispatch => ({
   toggleLeagueHidden: () => dispatch(toggleLeagueHidden())
});

export default connect(null, mapDispatchToProps)(DropdownLeagueContents);
