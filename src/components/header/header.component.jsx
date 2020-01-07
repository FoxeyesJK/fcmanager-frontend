import React from 'react';

import { ReactComponent as ClubIcon } from '../../assets/icon-tottenham.svg';

import { 
  HeaderContainer, 
  LogoContainer, 
  TextContainer,
  Title,
  SubTitle 
} from './header.styles';

const Header = ({ match, isSelectedOption }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <ClubIcon />
      </LogoContainer>

      <TextContainer>
        <Title>TEAM REPORT</Title>
        <SubTitle>2020 Spring Championship League</SubTitle>
      </TextContainer>
    </HeaderContainer>
  )
};


export default Header;