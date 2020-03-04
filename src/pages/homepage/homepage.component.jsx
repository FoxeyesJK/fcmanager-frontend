import React from 'react';
import { 
  HomePageContainer,
  TitleContainer,
  Title,
  SubTitle,
  MainBanner
 } from './homepage.styles';

const HomePage = () => {
    return (
      <HomePageContainer>
        <MainBanner />
        <TitleContainer>
          <Title>"Football is my happiness."</Title>
          <SubTitle>HEUNG-MIN SON</SubTitle>
        </TitleContainer>
      </HomePageContainer>
    )
  
}

export default HomePage;
