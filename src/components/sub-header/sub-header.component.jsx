import React from 'react';

import {
  SubHeaderContainer,
  OptionsContainer,
  OptionNavLink
} from './sub-header.styles';

const Header = ({ match, isSelectedOption }) => {
  return (
    <SubHeaderContainer>
      <OptionsContainer>
        <OptionNavLink exact to='/member'>
          User
        </OptionNavLink>
        <OptionNavLink exact to='/strategy'>
          League
        </OptionNavLink>
        <OptionNavLink exact to='/payment'>
          Payment
        </OptionNavLink>
        <OptionNavLink exact to='/league'>
          League
        </OptionNavLink>
        <OptionNavLink exact to='/schedule'>
          Schedule
        </OptionNavLink>
      </OptionsContainer>
    </SubHeaderContainer>
  )
};


export default Header;