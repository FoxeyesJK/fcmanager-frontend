import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ClubIcon } from '../../assets/icon-tottenham.svg';
import CustomDropdown from '../../components/custom-dropdown/custom-dropdown.component';

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
        <SubTitle>{hidden ? null : <CustomDropdown />}</SubTitle>
      </TextContainer>
    </HeaderContainer>
  )
};

const mapStateToProps = ({league: { hidden }}) => ({
  hidden
})
  
export default connect(mapStateToProps)(Header);