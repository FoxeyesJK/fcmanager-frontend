import React from 'react';

import {
  CurrentChampionContainer,
  Title,
  Team,
  TeamIcon, 
  IconContainer
} from './current-champion.styles.jsx';

const CurrentChampion = () => {
  return (
    <CurrentChampionContainer>
      <Title>Current Champion</Title>
      <IconContainer>
      <TeamIcon />
      </IconContainer>
      <Team>Blue</Team>
    </CurrentChampionContainer>
  )
}

export default CurrentChampion;