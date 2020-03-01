import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';

import { selectIsAdmin } from '../../redux/user/user.selectors';

import { 
  MenuContainer,
  TitleOptionContainer,
  TitleContainer,
  OptionsContainer,
  ClubName,
  ClubType,
  OptionLink,
  OptionName,
  StyledLeagueIcon,
  StyledScheduleIcon,
  StyledSquadIcon,
  StyledAdminIcon
} from './menu.styles.jsx';

const Menu = () => {

  const isAdmin = useSelector(selectIsAdmin, shallowEqual)
  return (
  <MenuContainer>
    <TitleOptionContainer>
      <TitleContainer>
        <ClubName>Northern Valley FC</ClubName>
        <ClubType>football club</ClubType>
      </TitleContainer>
      <OptionsContainer>
        <OptionLink to='/member'>
          <StyledSquadIcon />
          <OptionName>Players</OptionName>
        </OptionLink>
        {/* <OptionLink to='/strategy'>
          <StrategyIcon className='icon' />
          <OptionName>Strategy</OptionName>
        </OptionLink>
        <OptionLink to='/payment'>
          <PaymentIcon className='icon' />
          <OptionName>Payment</OptionName>
        </OptionLink> */}
        <OptionLink to='/league'>
          <StyledLeagueIcon/>
          <OptionName>League</OptionName>
        </OptionLink>
        <OptionLink to='/fixture'>
          <StyledScheduleIcon/>
          <OptionName>Fixture</OptionName>
        </OptionLink>
        {
          isAdmin ?
          <OptionLink to='/user'>
            <StyledAdminIcon />
            <OptionName>Logout</OptionName>
          </OptionLink> :
          <OptionLink to='/user'>
            <StyledAdminIcon />
            <OptionName>Login</OptionName>
          </OptionLink>
        }
        </OptionsContainer>
      </TitleOptionContainer>
  </MenuContainer>
  )
};


export default Menu;