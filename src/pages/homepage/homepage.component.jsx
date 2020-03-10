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
        <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Lato' type='text/css' />
        <MainBanner />
        <TitleContainer>
          <Title>SPORTIFY</Title>
          <SubTitle>Football is my happiness.</SubTitle>
        </TitleContainer>
      </HomePageContainer>
    )
  
}

export default HomePage;
