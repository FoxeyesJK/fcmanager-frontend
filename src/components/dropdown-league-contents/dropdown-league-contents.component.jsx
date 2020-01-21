import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { toggleLeagueHidden } from '../../redux/league/league.actions';

import {
   DropdownContent,
   DropdownOption
} from './dropdown-league-contents.styles.jsx';

const DropdownLeagueContents = ({ }) => {
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
        <DropdownOption>2020 Spring Championship League</DropdownOption>
        <DropdownOption>Saab</DropdownOption>
        <DropdownOption>Mercedes</DropdownOption>
        <DropdownOption>Audi</DropdownOption>
    </DropdownContent>
   );
};

export default DropdownLeagueContents;

// const mapDispatchToProps = dispatch => ({
//    toggleLeagueHidden: () => dispatch(toggleLeagueHidden())
// });

// export default connect(null, mapDispatchToProps)(DropdownLeagueContents);
