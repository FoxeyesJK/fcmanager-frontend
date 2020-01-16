import React from 'react';

import { 
  MenuContainer,
  TitleContainer,
  OptionsContainer,
  ClubName,
  ClubType,
  OptionLink,
  OptionName,
  StyledLeagueIcon,
  StyledScheduleIcon
} from './menu.styles.jsx';

const Menu = ({ match, isSelectedOption }) => {
  return (
  <MenuContainer>
    <TitleContainer>
      <ClubName>Northern Valley FC</ClubName>
      <ClubType>football club</ClubType>
    </TitleContainer>
    <OptionsContainer>
      {/* <OptionLink className={`${isSelectedOption ? 'selected-option' : ''} option`} to='/member'>
        <SquadIcon className='icon' />
        <OptionName>Squad</OptionName>
      </OptionLink>
      <OptionLink to='/strategy'>
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
      <OptionLink to='/fixture-admin'>
        <StyledScheduleIcon/>
        <OptionName>Fixture-Admin</OptionName>
      </OptionLink>
      {/* <OptionLink to='/admin-league'>
        <ReportIcon className='icon' />
        <OptionName>Schedule</OptionName>
      </OptionLink>
      <OptionLink to='/admin-league'>
        <ReportIcon className='icon' />
        <OptionName>Admin</OptionName>
      </OptionLink> */}
    </OptionsContainer>
  </MenuContainer>
  )
};


export default Menu;