import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ClubIcon } from '../../assets/icon-tottenham.svg';
import DropdownLeague from '../../components/dropdown-league/dropdown-league.component';
import DropdownLeagueContents from '../../components/dropdown-league-contents/dropdown-league-contents.component';

import { 
  HeaderContainer, 
  LogoContainer, 
  TextContainer,
  Title,
  SubTitle 
} from './header.styles';

const Header = ({ match, isSelectedOption, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <ClubIcon />
      </LogoContainer>
      <TextContainer>
        <Title>TEAM REPORT</Title>
        <SubTitle>
          <DropdownLeague />
          {hidden ? null : <DropdownLeagueContents />}
          </SubTitle>
      </TextContainer>
    </HeaderContainer>
  )
};

const mapStateToProps = ({league: { hidden }}) => ({
  hidden
})
  
export default connect(mapStateToProps)(Header);