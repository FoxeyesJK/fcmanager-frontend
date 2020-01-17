import React from 'react';

import {
  CurrentChampionContainer,
  TeamContainer,
  TitleContainer,
  Title,
  Team,
  TeamIcon, 
  ChampionIcon,
  IconContainer
} from './current-champion.styles.jsx';

const CurrentChampion = () => {
  return (
    <CurrentChampionContainer>
      <TitleContainer>
        <Title>CHAMPION</Title>
      </TitleContainer>
      <IconContainer>
        <TeamIcon />
      </IconContainer>
      <TeamContainer>
        <ChampionIcon />
        <Team>BLUE TEAM</Team>
      </TeamContainer>
    </CurrentChampionContainer>
  )
}

export default CurrentChampion;