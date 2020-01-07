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
        <OptionNavLink exact to='/admin-member'>
          User
        </OptionNavLink>
        <OptionNavLink exact to='/admin-league'>
          League
        </OptionNavLink>
      </OptionsContainer>
    </SubHeaderContainer>
  )
};


export default Header;