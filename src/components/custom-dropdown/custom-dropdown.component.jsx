import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { toggleLeagueHidden } from '../../redux/league/league.actions';

import {
   Dropdown,
   DropdownButton,
   DropdownContent,
   DropdownOption
} from './custom-dropdown.styles.jsx';

const CustomDropdown = ({ toggleLeagueHidden }) => {
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
   <Dropdown>
        <DropdownButton onClick={toggleLeagueHidden}>Dropdown</DropdownButton>
      <DropdownContent>
         <DropdownOption value="volvo">2020 Spring Championship League</DropdownOption>
         <DropdownOption value="saab">Saab</DropdownOption>
         <DropdownOption value="mercedes">Mercedes</DropdownOption>
         <DropdownOption value="audi">Audi</DropdownOption>
      </DropdownContent>
   </Dropdown>
   );
};

const mapDispatchToProps = dispatch => ({
   toggleLeagueHidden: () => dispatch(toggleLeagueHidden())
});

export default connect(null, mapDispatchToProps)(CustomDropdown);

// import {
//    Dropdown,
//    DropdownButton,
//    DropdownContent,
//    DropdownOption
// } from './custom-dropdown.styles.jsx';

// const CustomDropdown = ({ }) => {
//    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);

//    const handleClickOutside = (event) => {
//       if (ref.current && !ref.current.contains(event.target)) {
//           setIsComponentVisible(false);
//       }
//   };

//    useEffect(() => {
//       document.addEventListener('click', handleClickOutside, true);
//       return () => {
//          document.removeEventListener('click', handleClickOutside, true);
//       };
//    });

//    const { isClicked } = button;

//    const { ref, isComponentVisible } = useComponentVisible(true);

//    return (
//    <Dropdown>
      // <DropdownButton onClick={() => setButton({isClicked: true})}>Dropdown</DropdownButton>
      // <DropdownContent isClicked={isClicked}>
      //    <DropdownOption value="volvo">2020 Spring Championship League</DropdownOption>
      //    <DropdownOption value="saab">Saab</DropdownOption>
      //    <DropdownOption value="mercedes">Mercedes</DropdownOption>
      //    <DropdownOption value="audi">Audi</DropdownOption>
      // </DropdownContent>
//    </Dropdown>
//    );
// };

// export default CustomDropdown;